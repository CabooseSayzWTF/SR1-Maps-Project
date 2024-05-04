// -------
#Includes
// -------

$Include: "amb_mp_arena.cts"

// -------
#Groups
// -------

// -------
#Navpoints
// -------

$Navpoint:	"mp_bac_042_$item000"
$Type:		"ground"
$Pos:			<0.802688 -1.640278 -3.566244>
$Orient:		[I]
+Chunk:		"mp_bac_042"

$Navpoint:	"mp_bac_042_$item001"
$Type:		"ground"
$Pos:			<-94.412056 0.000470 0.220647>
$Orient:		[I]
+Chunk:		"mp_bac_042"

$Navpoint:	"mp_bac_042_$item002"
$Type:		"ground"
$Pos:			<101.360878 -0.026202 -0.236454>
$Orient:		[I]
+Chunk:		"mp_bac_042"

$Navpoint:	"mp_bac_042_$item003"
$Type:		"ground"
$Pos:			<10.453206 0.388475 85.256256>
$Orient:		[I]
+Chunk:		"mp_bac_042"

$Navpoint:	"mp_bac_042_$item004"
$Type:		"ground"
$Pos:			<3.226934 -0.070872 -87.243454>
$Orient:		[-0.122173]
+Chunk:		"mp_bac_042"

$Navpoint:	"mp_bac_042_$respawn000"
$Type:		"ground"
$Pos:			<-49.545906 -0.228051 -58.143024>
$Orient:		[0.837758]
+Chunk:		"mp_bac_042"

$Navpoint:	"mp_bac_042_$respawn001"
$Type:		"ground"
$Pos:			<50.787445 -0.123400 -61.108192>
$Orient:		[-0.733038]
+Chunk:		"mp_bac_042"

$Navpoint:	"mp_bac_042_$respawn002"
$Type:		"ground"
$Pos:			<64.917763 -0.123399 31.765656>
$Orient:		[-2.199115]
+Chunk:		"mp_bac_042"

$Navpoint:	"mp_bac_042_$respawn003"
$Type:		"ground"
$Pos:			<-42.162685 -0.253343 69.490776>
$Orient:		[2.478368]
+Chunk:		"mp_bac_042"

$Navpoint:	"mp_bac_042_$respawn004"
$Type:		"ground"
$Pos:			<-28.403259 4.516234 21.961456>
$Orient:		[-0.244346]
+Chunk:		"mp_bac_042"

$Navpoint:	"mp_bac_042_$respawn005"
$Type:		"ground"
$Pos:			<-19.821280 2.452396 -14.267223>
$Orient:		[0.680679]
+Chunk:		"mp_bac_042"

$Navpoint:	"mp_bac_042_$respawn006"
$Type:		"ground"
$Pos:			<17.034649 1.129479 -27.529442>
$Orient:		[-1.047197]
+Chunk:		"mp_bac_042"

$Navpoint:	"mp_bac_042_$respawn007"
$Type:		"ground"
$Pos:			<27.250240 5.562885 18.399628>
$Orient:		[2.495822]
+Chunk:		"mp_bac_042"

$Navpoint:	"mp_bac_042_$r0000"
$Type:		"ground"
$Pos:			<-62.617245 -0.123400 37.973099>
$Orient:		[0.383972]
+Chunk:		"mp_bac_042"

$Navpoint:	"mp_bac_042_$r0001"
$Type:		"ground"
$Pos:			<28.906389 1.197280 -69.607140>
$Orient:		[I]
+Chunk:		"mp_bac_042"

$Navpoint:	"mp_bac_042_$v0000"
$Type:		"ground"
$Pos:			<15.028091 1.134424 -76.914726>
$Orient:		[I]
+Chunk:		"mp_bac_042"

$Navpoint:	"mp_bac_042_$v0001"
$Type:		"ground"
$Pos:			<-67.306152 -0.123400 21.549381>
$Orient:		[I]
+Chunk:		"mp_bac_042"

// -------
#Cameras
// -------

// -------
#Items
// -------

$Item:		"mp_bac_042_rpg_launcher000"
$Item type:	"rpg_launcher"
$Start nav:	"mp_bac_042_$item000"

$Item:		"mp_bac_042_sniper_rifle000"
$Item type:	"sniper_rifle"
$Start nav:	"mp_bac_042_$item001"

$Item:		"mp_bac_042_pump_action_shotgun000"
$Item type:	"pump_action_shotgun"
$Start nav:	"mp_bac_042_$item002"

$Item:		"mp_bac_042_ak47000"
$Item type:	"ak47"
$Start nav:	"mp_bac_042_$item003"

$Item:		"mp_bac_042_tec9000"
$Item type:	"tec9"
$Start nav:	"mp_bac_042_$item004"

// -------
#Triggers
// -------

// -------
#Vehicles
// -------

$Vehicle:		"mp_bac_042_$v0000"
$Vehicle type:	"sp_metermaid01"
$Start nav:		"mp_bac_042_$v0000"
$Stream Distance:			50.000

$Vehicle:		"mp_bac_042_$v0001"
$Vehicle type:	"sp_metermaid01"
$Start nav:		"mp_bac_042_$v0001"
$Stream Distance:			50.000

// -------
#Respawns
// -------

$Respawn:		"mp_bac_042_respawn000"
$Start nav:		"mp_bac_042_$respawn000"
$Box size:		-2.000000 0.000000 -2.000000 2.000000 2.000000 2.000000

$Respawn:		"mp_bac_042_respawn001"
$Start nav:		"mp_bac_042_$respawn001"
$Box size:		-2.000000 0.000000 -2.000000 2.000000 2.000000 2.000000

$Respawn:		"mp_bac_042_respawn002"
$Start nav:		"mp_bac_042_$respawn002"
$Box size:		-2.000000 0.000000 -2.000000 2.000000 2.000000 2.000000

$Respawn:		"mp_bac_042_respawn003"
$Start nav:		"mp_bac_042_$respawn003"
$Box size:		-2.000000 0.000000 -2.000000 2.000000 2.000000 2.000000

$Respawn:		"mp_bac_042_respawn004"
$Start nav:		"mp_bac_042_$respawn004"
$Box size:		-2.000000 0.000000 -2.000000 2.000000 2.000000 2.000000

$Respawn:		"mp_bac_042_respawn005"
$Start nav:		"mp_bac_042_$respawn005"
$Box size:		-2.000000 0.000000 -2.000000 2.000000 2.000000 2.000000

$Respawn:		"mp_bac_042_respawn006"
$Start nav:		"mp_bac_042_$respawn006"
$Box size:		-2.000000 0.000000 -2.000000 2.000000 2.000000 2.000000

$Respawn:		"mp_bac_042_respawn007"
$Start nav:		"mp_bac_042_$respawn007"
$Box size:		-2.000000 0.000000 -2.000000 2.000000 2.000000 2.000000

$Respawn:		"mp_bac_042_$r0000"
$Start nav:		"mp_bac_042_$r0000"
$Box size:		-2.625000 0.000000 -3.125000 2.625000 4.000000 3.125000
+Vehicle

$Respawn:		"mp_bac_042_$r0001"
$Start nav:		"mp_bac_042_$r0001"
$Box size:		-2.125000 0.000000 -2.250000 2.125000 4.000000 2.250000
+Vehicle

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

// -------------
#Audio Barriers
// -------------

// -------
#Nodes
// -------


#End
