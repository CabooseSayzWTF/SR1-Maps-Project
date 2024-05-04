// -------
#Includes
// -------

// -------
#Groups
// -------


// -------
#Navpoints
// -------

$Navpoint:	"mp_pricemn_$respawn000"
$Type:		"ground"
$Pos:			<324.8799 34.16893 -2096.985>
$Orient:		[2.035043]
+Chunk:		"mp_pricemn"

$Navpoint:	"mp_pricemn_$respawn001"
$Type:		"ground"
$Pos:			<329.1396 34.16893 -2092.284>
$Orient:		[-2.639171]
+Chunk:		"mp_pricemn"

$Navpoint:	"mp_pricemn_$respawn002"
$Type:		"ground"
$Pos:			<324.218 34.16894 -2104.502>
$Orient:		[0.4462544]
+Chunk:		"mp_pricemn"

$Navpoint:	"mp_pricemn_$respawn003"
$Type:		"ground"
$Pos:			<336.167 34.16895 -2109.816>
$Orient:		[-1.065588]
+Chunk:		"mp_pricemn"

$Navpoint:	"mp_pricemn_$pimp enter000"
$Type:		"ground"
$Pos:			<330.7632 38.66779 -2100.246>
$Orient:		[0.4441313]
+Chunk:		"mp_pricemn"

$Navpoint:	"mp_pricemn_$respawn004"
$Type:		"ground"
$Pos:			<335.6609 34.16895 -2096.046>
$Orient:		[-2.662475]
+Chunk:		"mp_pricemn"

$Navpoint:	"mp_pricemn_$respawn005"
$Type:		"ground"
$Pos:			<333.4597 34.16895 -2093.513>
$Orient:		[-2.713509]
+Chunk:		"mp_pricemn"

$Navpoint:	"mp_pricemn_$respawn006"
$Type:		"ground"
$Pos:			<353.3739 34.16775 -2125.9>
$Orient:		[-1.100584]
+Chunk:		"mp_pricemn"

$Navpoint:	"mp_pricemn_$respawn007"
$Type:		"ground"
$Pos:			<357.8777 38.44836 -2119.897>
$Orient:		[-1.085514]
+Chunk:		"mp_pricemn"

$Navpoint:	"mp_pricemn_$pimp enter001"
$Type:		"ground"
$Pos:			<32.892258 -4.339729 -17.291853>
$Orient:		[I]
+Chunk:		"mp_pricemn"

$Navpoint:	"mp_pricemn_$r000"
$Type:		"ground"
$Pos:			<351.8026 38.44837 -2110.092>
$Orient:		[-2.728245]
+Chunk:		"mp_pricemn"

$Navpoint:	"mp_pricemn_$r001"
$Type:		"ground"
$Pos:			<340.3294 38.66781 -2101.146>
$Orient:		[-2.643054]
+Chunk:		"mp_pricemn"

$Navpoint:	"mp_pricemn_$r002"
$Type:		"ground"
$Pos:			<334.087 38.6678 -2101.917>
$Orient:		[-2.68632]
+Chunk:		"mp_pricemn"

$Navpoint:	"mp_pricemn_$r003"
$Type:		"ground"
$Pos:			<326.357 38.66778 -2106.251>
$Orient:		[2.121788]
+Chunk:		"mp_pricemn"

// -------
#Cameras
// -------

// -------
#Items
// -------

// -------
#Triggers
// -------

$Trigger:				"mp_pricemn_$pimp enter000"
$Trigger type:			"sphere"
$Trigger action:		"pimp enter"
$Trigger max fires:	0
$Trigger delay:		10000
$Start nav:				"mp_pricemn_$pimp enter000"
+Disabled
$Sphere radius:			.7

// -------
#Vehicles
// -------

// -------
#Respawns
// -------

$Respawn:		"mp_pricemn_respawn000"
$Start nav:		"mp_pricemn_$respawn000"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_pricemn_respawn001"
$Start nav:		"mp_pricemn_$respawn001"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_pricemn_respawn002"
$Start nav:		"mp_pricemn_$respawn002"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_pricemn_respawn003"
$Start nav:		"mp_pricemn_$respawn003"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_pricemn_respawn004"
$Start nav:		"mp_pricemn_$respawn004"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_pricemn_respawn005"
$Start nav:		"mp_pricemn_$respawn005"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_pricemn_respawn006"
$Start nav:		"mp_pricemn_$respawn006"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_pricemn_respawn007"
$Start nav:		"mp_pricemn_$respawn007"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_pricemn_$r000"
$Start nav:		"mp_pricemn_$r000"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_pricemn_$r001"
$Start nav:		"mp_pricemn_$r001"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_pricemn_$r002"
$Start nav:		"mp_pricemn_$r002"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_pricemn_$r003"
$Start nav:		"mp_pricemn_$r003"
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
