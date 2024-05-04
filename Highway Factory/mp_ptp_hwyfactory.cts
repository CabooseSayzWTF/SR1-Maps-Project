// -------
#Includes
// -------

$Include: "amb_factory.cts"

// -------
#Groups
// -------


// -------
#Navpoints
// -------

$Navpoint:	"mp_hwyfactory_$respawn000"
$Type:		"ground"
$Pos:			<-551.9896 28.3171 748.2247>
$Orient:		[-1.634233]
+Chunk:		"mp_hwyfactory"

$Navpoint:	"mp_hwyfactory_$respawn001"
$Type:		"ground"
$Pos:			<-552.2092 23.5427 706.0809>
$Orient:		[-1.574773]
+Chunk:		"mp_hwyfactory"

$Navpoint:	"mp_hwyfactory_$respawn002"
$Type:		"ground"
$Pos:			<-566.3344 40.65463 726.9492>
$Orient:		[-1.63445]
+Chunk:		"mp_hwyfactory"

$Navpoint:	"mp_hwyfactory_$respawn003"
$Type:		"ground"
$Pos:			<-606.8922 28.45921 769.3038>
$Orient:		[-1.623935]
+Chunk:		"mp_hwyfactory"

$Navpoint:	"mp_hwyfactory_$pimp enter000"
$Type:		"ground"
$Pos:			<-517.6404 28.36195 727.1777>
$Orient:		[1.504639]
+Chunk:		"mp_hwyfactory"

$Navpoint:	"mp_hwyfactory_$respawn004"
$Type:		"ground"
$Pos:			<-587.1292 33.20966 752.2878>
$Orient:		[-1.667786]
+Chunk:		"mp_hwyfactory"

$Navpoint:	"mp_hwyfactory_$respawn005"
$Type:		"ground"
$Pos:			<-616.2056 23.6198 725.417>
$Orient:		[-1.20436]
+Chunk:		"mp_hwyfactory"

$Navpoint:	"mp_hwyfactory_$respawn006"
$Type:		"ground"
$Pos:			<-746.346 18.90127 686.6544>
$Orient:		[0.1634804]
+Chunk:		"mp_hwyfactory"

$Navpoint:	"mp_hwyfactory_$respawn007"
$Type:		"ground"
$Pos:			<-740.0635 18.90127 684.7686>
$Orient:		[0.2035892]
+Chunk:		"mp_hwyfactory"

$Navpoint:	"mp_hwyfactory_$pimp enter001"
$Type:		"ground"
$Pos:			<32.892258 -4.339729 -17.291853>
$Orient:		[I]
+Chunk:		"mp_hwyfactory"

$Navpoint:	"mp_hwyfactory_$r000"
$Type:		"ground"
$Pos:			<-752.3173 18.90127 687.8477>
$Orient:		[0.1741833]
+Chunk:		"mp_hwyfactory"

$Navpoint:	"mp_hwyfactory_$r001"
$Type:		"ground"
$Pos:			<-738.6822 18.15213 695.783>
$Orient:		[0.1843559]
+Chunk:		"mp_hwyfactory"

$Navpoint:	"mp_hwyfactory_$r002"
$Type:		"ground"
$Pos:			<-747.8165 18.14056 697.9664>
$Orient:		[0.1468026]
+Chunk:		"mp_hwyfactory"

$Navpoint:	"mp_hwyfactory_$r003"
$Type:		"ground"
$Pos:			<-741.8883 18.45869 703.6424>
$Orient:		[0.1697057]
+Chunk:		"mp_hwyfactory"

// -------
#Cameras
// -------

// -------
#Items
// -------

// -------
#Triggers
// -------

$Trigger:				"mp_hwyfactory_$pimp enter000"
$Trigger type:			"sphere"
$Trigger action:		"pimp enter"
$Trigger max fires:	0
$Trigger delay:		10000
$Start nav:				"mp_hwyfactory_$pimp enter000"
+Disabled
$Sphere radius:			.7

// -------
#Vehicles
// -------

// -------
#Respawns
// -------

$Respawn:		"mp_hwyfactory_respawn000"
$Start nav:		"mp_hwyfactory_$respawn000"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_hwyfactory_respawn001"
$Start nav:		"mp_hwyfactory_$respawn001"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_hwyfactory_respawn002"
$Start nav:		"mp_hwyfactory_$respawn002"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_hwyfactory_respawn003"
$Start nav:		"mp_hwyfactory_$respawn003"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_hwyfactory_respawn004"
$Start nav:		"mp_hwyfactory_$respawn004"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_hwyfactory_respawn005"
$Start nav:		"mp_hwyfactory_$respawn005"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_hwyfactory_respawn006"
$Start nav:		"mp_hwyfactory_$respawn006"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_hwyfactory_respawn007"
$Start nav:		"mp_hwyfactory_$respawn007"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_hwyfactory_$r000"
$Start nav:		"mp_hwyfactory_$r000"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_hwyfactory_$r001"
$Start nav:		"mp_hwyfactory_$r001"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_hwyfactory_$r002"
$Start nav:		"mp_hwyfactory_$r002"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_hwyfactory_$r003"
$Start nav:		"mp_hwyfactory_$r003"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

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
