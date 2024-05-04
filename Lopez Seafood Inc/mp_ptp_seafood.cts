// -------
#Includes
// -------

// -------
#Groups
// -------


// -------
#Navpoints
// -------

$Navpoint:	"mp_seafood_$respawn000"
$Type:		"ground"
$Pos:			<-1248.587 -2.849726 1113.325>
$Orient:		[-0.2985027]
+Chunk:		"mp_seafood"

$Navpoint:	"mp_seafood_$respawn001"
$Type:		"ground"
$Pos:			<-1279.149 -3.007741 1113.109>
$Orient:		[0.6571406]
+Chunk:		"mp_seafood"

$Navpoint:	"mp_seafood_$respawn002"
$Type:		"ground"
$Pos:			<-1229.306 -3.031632 1131.819>
$Orient:		[-1.523579]
+Chunk:		"mp_seafood"

$Navpoint:	"mp_seafood_$respawn003"
$Type:		"ground"
$Pos:			<-1242.839 -0.4372797 1100.448>
$Orient:		[-0.3389985]
+Chunk:		"mp_seafood"

$Navpoint:	"mp_seafood_$pimp enter000"
$Type:		"ground"
$Pos:			<-1176.124 -2.852183 1436.837>
$Orient:		[-2.088931]
+Chunk:		"mp_seafood"

$Navpoint:	"mp_seafood_$respawn004"
$Type:		"ground"
$Pos:			<-1210.766 -3.209016 1087.031>
$Orient:		[-0.6665546]
+Chunk:		"mp_seafood"

$Navpoint:	"mp_seafood_$respawn005"
$Type:		"ground"
$Pos:			<-1291.434 -2.86566 1124.641>
$Orient:		[0.8928897]
+Chunk:		"mp_seafood"

$Navpoint:	"mp_seafood_$respawn006"
$Type:		"ground"
$Pos:			<-1208.943 -3.102577 1415.334>
$Orient:		[-2.475838]
+Chunk:		"mp_seafood"

$Navpoint:	"mp_seafood_$respawn007"
$Type:		"ground"
$Pos:			<-1172.108 -2.718428 1398.542>
$Orient:		[-2.279341]
+Chunk:		"mp_seafood"

$Navpoint:	"mp_seafood_$pimp enter001"
$Type:		"ground"
$Pos:			<32.892258 -4.339729 -17.291853>
$Orient:		[I]
+Chunk:		"mp_seafood"

$Navpoint:	"mp_seafood_$r000"
$Type:		"ground"
$Pos:			<-1178.277 -2.741146 1417.429>
$Orient:		[-2.129542]
+Chunk:		"mp_seafood"

$Navpoint:	"mp_seafood_$r001"
$Type:		"ground"
$Pos:			<-1258.077 8.023319 1351.8>
$Orient:		[-3.126926]
+Chunk:		"mp_seafood"

$Navpoint:	"mp_seafood_$r002"
$Type:		"ground"
$Pos:			<-1285.93 6.905141 1356.821>
$Orient:		[3.084775]
+Chunk:		"mp_seafood"

$Navpoint:	"mp_seafood_$r003"
$Type:		"ground"
$Pos:			<-1129.033 -2.615459 1427.639>
$Orient:		[-2.375357]
+Chunk:		"mp_seafood"

// -------
#Cameras
// -------

// -------
#Items
// -------

// -------
#Triggers
// -------

$Trigger:				"mp_seafood_$pimp enter000"
$Trigger type:			"sphere"
$Trigger action:		"pimp enter"
$Trigger max fires:	0
$Trigger delay:		10000
$Start nav:				"mp_seafood_$pimp enter000"
+Disabled
$Sphere radius:			.7

// -------
#Vehicles
// -------

// -------
#Respawns
// -------

$Respawn:		"mp_seafood_respawn000"
$Start nav:		"mp_seafood_$respawn000"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_seafood_respawn001"
$Start nav:		"mp_seafood_$respawn001"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_seafood_respawn002"
$Start nav:		"mp_seafood_$respawn002"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_seafood_respawn003"
$Start nav:		"mp_seafood_$respawn003"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_seafood_respawn004"
$Start nav:		"mp_seafood_$respawn004"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_seafood_respawn005"
$Start nav:		"mp_seafood_$respawn005"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_seafood_respawn006"
$Start nav:		"mp_seafood_$respawn006"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_seafood_respawn007"
$Start nav:		"mp_seafood_$respawn007"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_seafood_$r000"
$Start nav:		"mp_seafood_$r000"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_seafood_$r001"
$Start nav:		"mp_seafood_$r001"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_seafood_$r002"
$Start nav:		"mp_seafood_$r002"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_seafood_$r003"
$Start nav:		"mp_seafood_$r003"
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
