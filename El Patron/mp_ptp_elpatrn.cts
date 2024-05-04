// -------
#Includes
// -------

// -------
#Groups
// -------


// -------
#Navpoints
// -------

$Navpoint:	"mp_elpatrn_$respawn000"
$Type:		"ground"
$Pos:			<-120.7032 -3.850013 539.7352>
$Orient:		[3.096812]
+Chunk:		"mp_elpatrn"

$Navpoint:	"mp_elpatrn_$respawn001"
$Type:		"ground"
$Pos:			<-144.0735 -3.793902 562.8873>
$Orient:		[-1.513371]
+Chunk:		"mp_elpatrn"

$Navpoint:	"mp_elpatrn_$respawn002"
$Type:		"ground"
$Pos:			<-112.0264 -3.850016 486.9171>
$Orient:		[-1.427639]
+Chunk:		"mp_elpatrn"

$Navpoint:	"mp_elpatrn_$respawn003"
$Type:		"ground"
$Pos:			<-125.9192 -3.995385 455.5064>
$Orient:		[0.4332762]
+Chunk:		"mp_elpatrn"

$Navpoint:	"mp_elpatrn_$pimp enter000"
$Type:		"ground"
$Pos:			<-451.2203 -0.3654798 556.8196>
$Orient:		[-1.624997]
+Chunk:		"mp_elpatrn"

$Navpoint:	"mp_elpatrn_$respawn004"
$Type:		"ground"
$Pos:			<-140.321 -3.85 545.0313>
$Orient:		[-2.348794]
+Chunk:		"mp_elpatrn"

$Navpoint:	"mp_elpatrn_$respawn005"
$Type:		"ground"
$Pos:			<-111.1988 -3.849085 494.0134>
$Orient:		[0.0200157]
+Chunk:		"mp_elpatrn"

$Navpoint:	"mp_elpatrn_$respawn006"
$Type:		"ground"
$Pos:			<-373.4036 5.648996 695.6452>
$Orient:		[3.060295]
+Chunk:		"mp_elpatrn"

$Navpoint:	"mp_elpatrn_$respawn007"
$Type:		"ground"
$Pos:			<-366.2154 -2.716647 591.9948>
$Orient:		[0.3686808]
+Chunk:		"mp_elpatrn"

$Navpoint:	"mp_elpatrn_$pimp enter001"
$Type:		"ground"
$Pos:			<32.892258 -4.339729 -17.291853>
$Orient:		[I]
+Chunk:		"mp_elpatrn"

$Navpoint:	"mp_elpatrn_$r000"
$Type:		"ground"
$Pos:			<-322.2964 -5.334581 517.47>
$Orient:		[-0.07552992]
+Chunk:		"mp_elpatrn"

$Navpoint:	"mp_elpatrn_$r001"
$Type:		"ground"
$Pos:			<-274.2998 -3.995 524.4136>
$Orient:		[-1.566084]
+Chunk:		"mp_elpatrn"

$Navpoint:	"mp_elpatrn_$r002"
$Type:		"ground"
$Pos:			<-249.2261 -3.72148 635.9885>
$Orient:		[-1.700826]
+Chunk:		"mp_elpatrn"

$Navpoint:	"mp_elpatrn_$r003"
$Type:		"ground"
$Pos:			<-324.049 -3.995004 600.2747>
$Orient:		[0.325337]
+Chunk:		"mp_elpatrn"

// -------
#Cameras
// -------

// -------
#Items
// -------

// -------
#Triggers
// -------

$Trigger:				"mp_elpatrn_$pimp enter000"
$Trigger type:			"sphere"
$Trigger action:		"pimp enter"
$Trigger max fires:	0
$Trigger delay:		10000
$Start nav:				"mp_elpatrn_$pimp enter000"
+Disabled
$Sphere radius:			.7

// -------
#Vehicles
// -------

// -------
#Respawns
// -------

$Respawn:		"mp_elpatrn_respawn000"
$Start nav:		"mp_elpatrn_$respawn000"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_elpatrn_respawn001"
$Start nav:		"mp_elpatrn_$respawn001"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_elpatrn_respawn002"
$Start nav:		"mp_elpatrn_$respawn002"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_elpatrn_respawn003"
$Start nav:		"mp_elpatrn_$respawn003"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_elpatrn_respawn004"
$Start nav:		"mp_elpatrn_$respawn004"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_elpatrn_respawn005"
$Start nav:		"mp_elpatrn_$respawn005"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_elpatrn_respawn006"
$Start nav:		"mp_elpatrn_$respawn006"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_elpatrn_respawn007"
$Start nav:		"mp_elpatrn_$respawn007"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_elpatrn_$r000"
$Start nav:		"mp_elpatrn_$r000"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_elpatrn_$r001"
$Start nav:		"mp_elpatrn_$r001"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_elpatrn_$r002"
$Start nav:		"mp_elpatrn_$r002"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_elpatrn_$r003"
$Start nav:		"mp_elpatrn_$r003"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

// -------
#Humans
// -------

// -------
#Spawn NPC Regions
// -------

// -------
#Racing
// -------

// -------
#Strongholds
// -------

// -------
#Special Spawns
// -------

// -------
#Parking
// -------

// -------
#Chunk Streaming Test Cases
// -------

// -------
#Ambients
// -------

// ---------------
#Negative Regions
// ---------------

// ----------
#DSP Regions
// ----------

// -------------
#Audio Cluders
// -------------

// -------
#Nodes
// -------


#End
