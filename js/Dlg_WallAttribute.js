WallParamDlgUI();
function WallParamDlgUI(){

	var setStyle=`<style>
	.WallDlg{
		position: absolute;
	    bottom: 0px;
	    right: 0px;
		background-color: #F5F5F5;
		z-index: 999;
		border-radius: 5px;
		box-shadow:1px 1px 16px 0px rgba(0,0,0,0.1);
	}
	.FreeDrag_header {height: 45px;border-bottom: 1px solid #CCC;box-sizing: border-box;padding: 0 20px; cursor: move;}
	.FreeDrag_header span { line-height: 45px;font-size: 15px;}
	.FreeDrag_header i { float: right;line-height: 45px;cursor: pointer;font-size: 16px;}
	.FreeDrag_body{ padding:5px;box-sizing: border-box;}
	.el-radio-button{margin-bottom: 5px;}
	.el-radio-group .el-input{width:25%;top:5px;}
	.uniformScaling{margin:20px;}
	.itemList-imgList .el-radio-button__inner{margin-right: 7px;}
	.itemList-imgList .el-radio-group:nth-of-type(1) .el-radio-button__inner{padding: 12px 15.1px;}
	.itemList-imgList .el-radio-group:nth-of-type(2) .el-radio-button__inner{padding: 10px 12px;}
	</style>`

	$('head').append(setStyle);

	var setHtml=`<div class="WallDlg attributeInterface" style="display:none;">
			<div class="FreeDrag_header attrTitle">
				<span>墙体调整</span>
				<i class="el-icon-close" onclick="m_ParamWallDlg.HideBar()"></i>
			</div>
			<div class="FreeDrag_body">
					<div class="itemList-imgList clearfloat">

					<!--	<el-radio-group v-model="attributeInterface.wall.type">
							<el-radio-button :label="0" onclick="m_ParamWallDlg.Delete()">{{ $t("Language.OrdinaryWall")}}</el-radio-button>
							<el-radio-button :label="1" onclick="m_ParamWallDlg.Delete()">{{ $t("Language.MainWall")}}</el-radio-button>
							<el-radio-button :label="2" onclick="m_ParamWallDlg.Delete()">{{ $t("Language.SunkFence")}}</el-radio-button>
						</el-radio-group> -->

						<span class="demonstration" style="width: 100px;height: 25px;margin-top: 5px;">墙体厚度(mm)</span>
						<el-radio-group v-model="attributeInterface.wall.radio" @change="wallRadio">
							<el-radio-button :label="100">100</el-radio-button>
							<el-radio-button :label="120">120</el-radio-button>
							<el-radio-button :label="200">200</el-radio-button>
							<el-radio-button :label="240">240</el-radio-button>
							<el-radio-button :label="5">自定义</el-radio-button>
							<el-input v-model="attributeInterface.wall.width.int" placeholder="" @input='WallWidth' v-show="attributeInterface.wall.radio==5"></el-input>
						</el-radio-group>

						<div class="uniformScaling justify-space">
							<div></div>
							<el-button onclick="m_ParamWallDlg.OnSplit();">拆分</el-button>
							<el-button type="primary" onclick="m_ParamWallDlg.Delete()">删除</el-button>
						</div>

						<div class="wall-length-section" style="margin-top: 15px; border-top: 1px solid #dcdfe6; padding-top: 15px;">
							<span class="demonstration" style="width: 100px;height: 25px;margin-top: 5px;">墙体长度(mm)</span>
							<el-input 
								id="wallLengthInput"
								v-model="attributeInterface.wall.length.int" 
								type="number" 
								placeholder="输入长度"
								style="width: 120px;"
								:disabled="attributeInterface.wall.length.disabled"
								@input="WallLength">
							</el-input>
							<div v-if="attributeInterface.wall.length.error" 
								 style="color: #f56c6c; font-size: 12px; margin-top: 5px;">
								{{ attributeInterface.wall.length.error }}
							</div>
						</div>

					<!--	<div class="uniformScaling justify-space">
							<el-checkbox v-model="header.showLable.check_label" onclick="m_ParamWallDlg.OnShowLabel();">
								{{ $t("Language.Size")}}</el-checkbox>
						</div> -->
					</div>
			</div>
		</div>`;

	$('.cont-main').append(setHtml);
	
}

$(function(){
	// var x = 0;
	// var y = 0;
	// var l = 0;
	// var t = 0;
	// var isDown = false;

	// $('.WallDlg .FreeDrag_header').mousedown(function(event) {
	// 	//获取x坐标和y坐标
	//     x = event.clientX;
	//     y = event.clientY;
	//     //获取左部和顶部的偏移量
	//     l = $('.WallDlg').offset().left;
	//     t = $('.WallDlg').offset().top;
	//     //开关打开
	//     isDown = true;
	//     //设置样式
	// 	$(window).mousemove(function(event){
	// 		if (!isDown) {return;}

	// 		//获取x和y
	// 	    var nx = event.clientX;
	// 	    var ny = event.clientY;
	// 	    //计算移动后的左偏移量和顶部的偏移量
	// 	    var nl = nx - (x - l);
	// 	    var nt = ny - (y - t);

	// 	    if (nl<=0) {
	// 	    	nl=0;
	// 	    }
	// 	    if (nt<=0) {
	// 	    	nt=0;
	// 	    }

	// 	    var dw=$('.WallDlg').outerWidth(true);
	// 	   	var ww=$(window).width();
	// 	    var dh=$('.WallDlg').outerHeight(true);
	// 	   	var wh=$(window).height();

	// 	    if (nl+dw>=ww) {
	// 	    	nl=(ww-dw);
	// 	    }

	// 	    if (nt+dh>=wh) {
	// 	    	nt=(wh-dh);
	// 	    }

	// 	    $('.WallDlg').css({
	// 	    	right: (ww-nl-dw) + 'px',
	// 	    	top: nt + 'px'
	// 	    });

	//         window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
	// 	});

	// 	$(document).mouseup(function(){
	// 		//开关打开
	// 	    isDown = false;
	// 	});
	// });
})


/**
 * @api Dlg_WallAttribute
 * @apiGroup Dlg_WallAttribute
 * @apiName  0
 * @apiDescription 墙体设置窗口
 */
function Dlg_WallAttribute()
{
	this.mWall;
	this.mLabel;	
	
	/**
	 * @api MoveEdit()
	 * @apiGroup Dlg_WallAttribute
	 * @apiName  0
	 * @apiDescription 墙体尺寸输入窗随鼠标移动
	 */	
	this.MoveEdit = function()
	{
		div1=document.getElementById("mEditBar");
		div1.style.left= mouseScreen.x+10+'px';
		div1.style.top= mouseScreen.y-23+'px';	
	};
	
	// 显示属性窗口
	this.Show = function(tObj)
	{
		this.mWall = tObj;
		let wallInt = parseInt(this.mWall.m_fWidth*10);
		app.attributeInterface.wall.width.int = wallInt;
		
		// Calculate wall length using start and end points
		let startX = this.mWall.m_vStart.x;
		let startY = this.mWall.m_vStart.y;
		let endX = this.mWall.m_vEnd.x;
		let endY = this.mWall.m_vEnd.y;
		
		// Calculate length using distance formula and convert to millimeters
		let length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)) * 10;
		length = Math.round(length); // Round to nearest millimeter
		
		// Update the wall length input
		app.attributeInterface.wall.length.int = length;
		app.attributeInterface.wall.length.disabled = false; // Enable editing
		
		if(wallInt==100 || wallInt==120 || wallInt==200 || wallInt==240){
			app.attributeInterface.wall.radio=wallInt;
		}else{
			app.attributeInterface.wall.radio=5;
		}
		$('.WallDlg').show();
	};
	
	this.width = function(int){
   		if (this.mWall.m_fWidth==null)
			return;
			
		if(this.mWall.m_fWidth == parseInt(int)/10)
			return;

		this.mWall.m_fWidth=parseInt(int)/10;
		this.mWall.OnRender1();		// 无标注
		//mHouseClass.mWallClass.OnUpdateAllWall();		
		//this.mWall.OnMoveWall(this.mWall.mCurMouseX,this.mWall.mCurMouseY);	// 更新门窗宽度
		render();
   };

	this.findOppositeWall = function(wall) {
		if (wall == null)
			return null;

		// Get wall direction
		let dx = wall.m_vEnd.x - wall.m_vStart.x;
		let dy = wall.m_vEnd.y - wall.m_vStart.y;
		let length = Math.sqrt(dx * dx + dy * dy);
		
		if (length < 0.0001) return null;

		let dir = {
			x: dx / length,
			y: dy / length
		};

		// Find parallel wall with opposite direction
		let oppositeWall = null;
		let minDist = Number.MAX_VALUE;

		for (let i = 0; i < mHouseClass.mWallClass.mWallArray.length; i++) {
			let testWall = mHouseClass.mWallClass.mWallArray[i];
			if (testWall === wall) continue;

			let tdx = testWall.m_vEnd.x - testWall.m_vStart.x;
			let tdy = testWall.m_vEnd.y - testWall.m_vStart.y;
			let tLength = Math.sqrt(tdx * tdx + tdy * tdy);
			
			if (tLength < 0.0001) continue;

			let testDir = {
				x: tdx / tLength,
				y: tdy / tLength
			};

			// Check if parallel (dot product close to 1 or -1)
			let dotProduct = Math.abs(dir.x * testDir.x + dir.y * testDir.y);
			if (dotProduct > 0.9) {
				// Calculate average distance between walls
				let dist = Math.abs(
					(testWall.m_vStart.y - wall.m_vStart.y) * dir.x -
					(testWall.m_vStart.x - wall.m_vStart.x) * dir.y
				);

				if (dist < minDist) {
					minDist = dist;
					oppositeWall = testWall;
				}
			}
		}

		return oppositeWall;
	};

	this.length = function(int) {
		if (this.mWall == null)
			return;

		console.log("=== Starting wall length modification ===");
		console.log("Selected wall start point:", {
			x: this.mWall.m_vStart.x,
			y: this.mWall.m_vStart.y
		});
		console.log("Selected wall end point:", {
			x: this.mWall.m_vEnd.x,
			y: this.mWall.m_vEnd.y
		});

		// Input validation
		let inputLength = Number(int);
		if (!inputLength || inputLength <= 0) {
			inputLength = 1;
			app.attributeInterface.wall.length.int = inputLength;
			mHouseClass.mLanguage.ShowMessageBox("墙长度不能小于1mm，已自动调整为1mm");
		} else if (inputLength >= 90000) {
			inputLength = 89999;
			app.attributeInterface.wall.length.int = inputLength;
			mHouseClass.mLanguage.ShowMessageBox("墙长度不能大于89999mm，已自动调整为89999mm");
		}

		// Get current wall vector and direction
		let dx = this.mWall.m_vEnd.x - this.mWall.m_vStart.x;
		let dy = this.mWall.m_vEnd.y - this.mWall.m_vStart.y;
		let currentLength = Math.sqrt(dx * dx + dy * dy);
		
		console.log("Current wall length:", currentLength);
		console.log("Target length (internal units):", inputLength / 10);

		// Prevent division by zero
		if (currentLength < 0.0001) {
			currentLength = 0.0001;
		}

		// Calculate new length and change
		let newLength = inputLength / 10; // Convert from mm to internal units
		let lengthChange = newLength - currentLength;

		// Get main wall direction (normalized)
		let mainWallDir = {
			x: dx / currentLength,
			y: dy / currentLength
		};

		console.log("Main wall direction:", mainWallDir);
		console.log("Length change:", lengthChange);

		// Store original end point before updating
		let originalEndX = this.mWall.m_vEnd.x;
		let originalEndY = this.mWall.m_vEnd.y;

		// Update main wall
		this.mWall.m_vEnd.x = this.mWall.m_vStart.x + mainWallDir.x * newLength;
		this.mWall.m_vEnd.y = this.mWall.m_vStart.y + mainWallDir.y * newLength;

		console.log("Updated main wall end point:", {
			x: this.mWall.m_vEnd.x,
			y: this.mWall.m_vEnd.y
		});

		this.mWall.OnRender();

		// Calculate the actual movement vector
		let moveVec = {
			x: this.mWall.m_vEnd.x - originalEndX,
			y: this.mWall.m_vEnd.y - originalEndY
		};

		console.log("Movement vector:", moveVec);

		// Find and update opposite wall
		let oppositeWall = this.findOppositeWall(this.mWall);
		if (oppositeWall) {
			console.log("=== Found opposite wall ===");
			console.log("Opposite wall start:", {
				x: oppositeWall.m_vStart.x,
				y: oppositeWall.m_vStart.y
			});
			console.log("Opposite wall end:", {
				x: oppositeWall.m_vEnd.x,
				y: oppositeWall.m_vEnd.y
			});

			// Determine if this wall is horizontal or vertical
			let isHorizontal = Math.abs(mainWallDir.x) > Math.abs(mainWallDir.y);

			// Calculate opposite wall direction
			let odx = oppositeWall.m_vEnd.x - oppositeWall.m_vStart.x;
			let ody = oppositeWall.m_vEnd.y - oppositeWall.m_vStart.y;
			let oLength = Math.sqrt(odx * odx + ody * ody);
			let oppositeDir = {
				x: odx / oLength,
				y: ody / oLength
			};

			// Store original opposite wall points
			let originalOppositeStartX = oppositeWall.m_vStart.x;
			let originalOppositeStartY = oppositeWall.m_vStart.y;
			let originalOppositeEndX = oppositeWall.m_vEnd.x;
			let originalOppositeEndY = oppositeWall.m_vEnd.y;

			// For opposite wall, we want to:
			// 1. Keep its start point fixed on the left/top
			// 2. Extend it to match the main wall's new length
			// 3. Maintain the same direction as the main wall
			if (isHorizontal) {
				// For horizontal walls:
				// - Left point should stay fixed
				// - Right point should extend/shrink to match new length
				let leftPoint = originalOppositeStartX <= originalOppositeEndX ? originalOppositeStartX : originalOppositeEndX;
				oppositeWall.m_vStart.x = leftPoint;
				oppositeWall.m_vEnd.x = leftPoint + newLength;
			} else {
				// For vertical walls:
				// - Top point should stay fixed
				// - Bottom point should extend/shrink to match new length
				let topPoint = originalOppositeStartY <= originalOppositeEndY ? originalOppositeStartY : originalOppositeEndY;
				oppositeWall.m_vStart.y = topPoint;
				oppositeWall.m_vEnd.y = topPoint + newLength;
			}

			console.log("Updated opposite wall end point:", {
				x: oppositeWall.m_vEnd.x,
				y: oppositeWall.m_vEnd.y
			});

			oppositeWall.OnRender();

			// Find perpendicular walls
			const PERPENDICULAR_THRESHOLD = 0.2;
			const ENDPOINT_THRESHOLD = 20;
			const WALL_THICKNESS = 20;

			console.log("=== Looking for perpendicular walls ===");
			console.log("Perpendicular threshold:", PERPENDICULAR_THRESHOLD);
			console.log("Endpoint connection threshold:", ENDPOINT_THRESHOLD);

			// Store all walls for reference
			let allWalls = mHouseClass.mWallClass.mWallArray;
			console.log("Total walls in scene:", allWalls.length);

			let perpendicularWalls = [];
			let wallIndex = 0;

			for (let wall of allWalls) {
				if (wall === this.mWall || wall === oppositeWall) continue;

				console.log(`\nChecking wall ${wallIndex++}:`);
				console.log("Wall start:", {
					x: wall.m_vStart.x,
					y: wall.m_vStart.y
				});
				console.log("Wall end:", {
					x: wall.m_vEnd.x,
					y: wall.m_vEnd.y
				});

				// Calculate wall direction
				let wallDx = wall.m_vEnd.x - wall.m_vStart.x;
				let wallDy = wall.m_vEnd.y - wall.m_vStart.y;
				let wallLength = Math.sqrt(wallDx * wallDx + wallDy * wallDy);
				
				if (wallLength < 0.0001) {
					console.log("Wall too short, skipping");
					continue;
				}

				let wallDir = {
					x: wallDx / wallLength,
					y: wallDy / wallLength
				};

				console.log("Wall direction:", wallDir);

				// Check if wall is perpendicular (dot product close to 0)
				let dotProduct = Math.abs(mainWallDir.x * wallDir.x + mainWallDir.y * wallDir.y);
				console.log("Wall dot product:", dotProduct);

				if (dotProduct < PERPENDICULAR_THRESHOLD) {
					// Check if this wall connects to either the main wall or opposite wall
					let halfThickness = WALL_THICKNESS / 2;

					let distToMainStart = Math.min(
						Math.sqrt(Math.pow(wall.m_vStart.x - (this.mWall.m_vStart.x - halfThickness), 2) + 
								Math.pow(wall.m_vStart.y - (this.mWall.m_vStart.y - halfThickness), 2)),
						Math.sqrt(Math.pow(wall.m_vEnd.x - (this.mWall.m_vStart.x - halfThickness), 2) + 
								Math.pow(wall.m_vEnd.y - (this.mWall.m_vStart.y - halfThickness), 2))
					);

					let distToMainEnd = Math.min(
						Math.sqrt(Math.pow(wall.m_vStart.x - (originalEndX + halfThickness), 2) + 
								Math.pow(wall.m_vStart.y - (originalEndY + halfThickness), 2)),
						Math.sqrt(Math.pow(wall.m_vEnd.x - (originalEndX + halfThickness), 2) + 
								Math.pow(wall.m_vEnd.y - (originalEndY + halfThickness), 2))
					);

					let connectsToMainStart = distToMainStart < ENDPOINT_THRESHOLD;
					let connectsToMainEnd = distToMainEnd < ENDPOINT_THRESHOLD;

					// Check if this wall is on the right side (for horizontal walls) or bottom (for vertical walls)
					let isRightOrBottom = false;
					if (isHorizontal) {
						// For horizontal walls, check if the wall is connected to the right end
						isRightOrBottom = connectsToMainEnd && wall.m_vStart.x >= (originalEndX - halfThickness);
					} else {
						// For vertical walls, check if the wall is connected to the bottom end
						isRightOrBottom = connectsToMainEnd && wall.m_vStart.y >= (originalEndY - halfThickness);
					}

					console.log("Wall position:", {
						connectsToMainStart,
						connectsToMainEnd,
						isRightOrBottom,
						distToMainStart,
						distToMainEnd
					});

					if (connectsToMainEnd) {
						perpendicularWalls.push({
							wall,
							connectsToMainStart,
							connectsToMainEnd,
							isRightOrBottom,
							distToMainStart,
							distToMainEnd
						});
					}
				}
			}

			console.log("\nNumber of perpendicular walls found:", perpendicularWalls.length);

			// Process perpendicular walls
			perpendicularWalls.forEach((wallData, index) => {
				console.log(`\n=== Processing perpendicular wall ${index} ===`);
				let wall = wallData.wall;

				// Move the wall if it's on the right/bottom side
				let shouldMove = wallData.isRightOrBottom;

				console.log("Wall movement decision:", {
					shouldMove,
					moveAmount: moveVec
				});

				if (shouldMove) {
					console.log("Moving wall - Before:", {
						start: { x: wall.m_vStart.x, y: wall.m_vStart.y },
						end: { x: wall.m_vEnd.x, y: wall.m_vEnd.y }
					});

					// Move both points of the wall to maintain its direction
					if (isHorizontal) {
						wall.m_vStart.x += moveVec.x;
						wall.m_vEnd.x += moveVec.x;
					} else {
						wall.m_vStart.y += moveVec.y;
						wall.m_vEnd.y += moveVec.y;
					}

					console.log("Moving wall - After:", {
						start: { x: wall.m_vStart.x, y: wall.m_vStart.y },
						end: { x: wall.m_vEnd.x, y: wall.m_vEnd.y }
					});

					wall.OnRender();
				}
			});
		}

		// Update scene and trigger wall updates
		render();
		mHouseClass.mWallClass.OnUpdateAllWall();
	};
	
	this.OnSplit = function()
	{
		if(this.mWall ==null)
			return;
		
		mHouseClass.mWallClass.OnAddWall( this.mWall.m_vStart.x,  this.mWall.m_vStart.y, this.mWall.m_vCenter.x, this.mWall.m_vCenter.y);
		mHouseClass.mWallClass.OnAddWall( this.mWall.m_vCenter.x, this.mWall.m_vCenter.y,this.mWall.m_vEnd.x,    this.mWall.m_vEnd.y);
		var vPos1 = new THREE.Vector3(this.mWall.m_vStart.x, this.mWall.m_vStart.y,  0);
		var vPos2 = new THREE.Vector3(this.mWall.m_vCenter.x,this.mWall.m_vCenter.y, 0);
		var vPos3 = new THREE.Vector3(this.mWall.m_vCenter.x,this.mWall.m_vCenter.y, 0);
		var vPos4 = new THREE.Vector3(this.mWall.m_vEnd.x, 	 this.mWall.m_vEnd.y, 	 0);
		this.Delete();
	
		for( var i = 0; i< mHouseClass.mWallClass.mWallArray.length; i++ ){
				mHouseClass.mWallClass.mWallArray[i].OnShow(false);
		}
		mHouseClass.mFloorClass.OnUpdateLabel();
		
		mHelpClass.OnShowPosAll(vPos1,vPos2,vPos3,vPos4);
	};
	
	
	this.ShowBar = function()
	{// 显示墙bar
/*		$("#mWallBar").show();
		var div1=document.getElementById("mWallBar");
		div1.style.left= mouseScreen.x+10+'px';
		div1.style.top= mouseScreen.y-100+'px';*/
	};
	
	// 隐藏墙bar
	this.HideBar = function()
	{
		$('.WallDlg').hide();
	};
		
	
	this.Delete = function()
	{
		// 删除墙体
		if(this.mWall)
		{
			mHelpClass.OnHidePosAll();
			mHouseClass.mWallClass.OnDelete(this.mWall);
			
			var pos1 = this.mWall.m_vStart;
			var pos2 = this.mWall.m_vEnd;
			mHouseClass.mWallClass.OnMerge(pos1);
			mHouseClass.mWallClass.OnMerge(pos2);
			
			for( var i = 0; i< mHouseClass.mWallClass.mWallArray.length; i++ )	//关闭 墙体辅助信息
					mHouseClass.mWallClass.mWallArray[i].OnShow(false);
					
			mHouseClass.mWallClass.OnUpdateAllWall();
		}
		
		this.mWall = null;
		this.HideBar();	
	};
	
	
	this.OnShowLabel = function()
	{
		// 显示尺寸
		if(this.mWall && this.mLabel)
		{
		//	this.mWall.OnShowLabel(false);
			this.mWall.m_bShowLabel = false;// 2D下是否显示标注到外侧
			this.mLabel.OnShowLabel(false);
		}
	};
	
	this.ChangeWallType = function(iIndex)
	{
		// 修改墙体类型
		if(this.mWall)
		{
			this.mWall.m_iWallType = iIndex;
			
			//thie.mWall.
		}
	}

}
showWallBlock();
function showWallBlock(){
	var setStyle=`<style>
		.wallSelect{position:absolute;width:auto;height:40px;background-color:#FFF;top:73px;left:355px;border-radius:5px;box-shadow:0px 0px 10px 1px rgba(0, 0, 0, 0.2); padding:5px 10px;box-sizing: border-box;line-height:30px;z-index:500;}
		.wallSelect .el-select{width:85px; margin-left:10px;}
		.wallSelect .el-select .el-input__inner{height:30px;line-height:30px;}
		.wallSelect .el-select .el-input__icon{line-height:30px;}
		.wallSelect .el-checkbox{margin-left: 5px;margin-right: 5px;}
		.wallSelect>span{font-size:14px;margin-left:10px;color:#606266}
		.wallSelect .el-radio{margin-bottom:0px;}
	</style>`

	// <el-radio-group v-model="attributeInterface.wall.wallline">
	// 	<el-radio :label="0">墙内线</el-radio>
	// 	<el-radio :label="1">墙中线</el-radio>
	// </el-radio-group>
	$('head').append(setStyle);
	let setHtml=`<div class="wallSelect" style="display:none">
	<span>墙厚</span>
	<el-select v-model="attributeInterface.wall.width.int" placeholder="请选择" @change='wallSelect'>
		<el-option label="50" value="50"></el-option>
		<el-option label="75" value="75"></el-option>
	    <el-option label="100" value="100"></el-option>
	    <el-option label="120" value="120"></el-option>
	    <el-option label="180" value="120"></el-option>
	    <el-option label="200" value="200"></el-option>
	    <el-option label="240" value="240"></el-option>
	</el-select>
	<el-checkbox v-model="attributeInterface.wall.zhengjiao">正交</el-checkbox>
	<el-checkbox v-model="attributeInterface.wall.xifu">吸附</el-checkbox>
	</div>`;
	$('#app').append(setHtml);
}