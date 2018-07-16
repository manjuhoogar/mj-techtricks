//*	(c) Ger Versluis 2000 version 5.41 24 December 2001	          *

	var NoOffFirstLineMenus=4;
	var LowBgColor='#FFFFFF';
	var LowSubBgColor='#FFFFFF';
	var HighBgColor='#006633';
	var HighSubBgColor='#006633';	//000A66
	var FontLowColor='#000000';
	var FontSubLowColor='#000000';
	var FontHighColor='#FFFFFF';
	var FontSubHighColor='#FFFFFF';
	var BorderColor='#000A66';
	var BorderSubColor='#006633';
	var BorderWidth=1;
	var BorderBtwnElmnts=1;
	var FontFamily="Helvetica, Verdana, Arial";
//	var FontFamily="Tahoma, Verdana, Arial, Helvetica";
	var FontSize=7;
	var FontBold=0;
	var FontItalic=0;
	var MenuTextCentered='left';
	var MenuCentered='left';
	var MenuVerticalCentered='top';
	var ChildOverlap=0;	//.045
	var ChildVerticalOverlap=.2;
	var StartTop=161;
	var StartLeft=0;
	var VerCorrect=0;
	var HorCorrect=0;
	var LeftPaddng=3;
	var TopPaddng=4;
	var FirstLineHorizontal=0;
	var MenuFramesVertical=1;
	var DissapearDelay=100;
	var TakeOverBgColor=1;
	var FirstLineFrame='navig';
	var SecLineFrame='space';
	var DocTargetFrame='space';
	var TargetLoc='';
	var HideTop=0;
	var MenuWrap=1;
	var RightToLeft=0;
	var UnfoldsOnClick=0;
	var WebMasterCheck=0;
	var ShowArrow=0;
	var KeepHilite=1;
	var Arrws=['tri.gif',5,10,'tridown.gif',10,5,'trileft.gif',5,10];

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}

Menu1=new Array("rollover:images/b_home_on.gif:images/b_home_on.gif","","",0,32,130);

Menu2=new Array("rollover:images/b_services_off.gif:images/b_services_on.gif","services.asp","",4,32,130);
	Menu2_1=new Array("CUSTOMIZED DEVELOPMENT","services.asp?p=development","",0,15,150);
	Menu2_2=new Array("DATABASE SOLUTIONS","services.asp?p=database","",0);
	Menu2_3=new Array("WEBSITE DEVELOPMENT","services.asp?p=web","",0);
//	Menu2_4=new Array("WEBSITE HOSTING","services.asp?p=hosting","",0);
//	Menu2_5=new Array("APPLICATION TRAINING","services.asp?p=training","",0);
	Menu2_4=new Array("INFORMATION REQUEST","request.asp","",0);

Menu3=new Array("rollover:images/b_company_off.gif:images/b_company_on.gif","company.asp","",5,32,130);
	Menu3_1=new Array("ABOUT US","company.asp?p=about","",0,15,125);
	Menu3_2=new Array("OUR MISSION","company.asp?p=mission","",0);
	Menu3_3=new Array("EMPLOYMENT","company.asp?p=employment","",0);
	Menu3_4=new Array("TESTIMONIALS","company.asp?p=testimonials","",0);
	Menu3_5=new Array("CONTACT US","company.asp?p=contact","",0);

Menu4=new Array("rollover:images/b_clients_off.gif:images/b_clients_on.gif","clients.asp","",0,32,130);
