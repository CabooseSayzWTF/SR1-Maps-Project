// -------
#Includes
// -------

// -------
#Groups
// -------


// -------
#Navpoints
// -------

$Navpoint:	"mp_kingpen_$respawn000"
$Type:		"ground"
$Pos:			<-898.7283 152.8745 -1233.691>
$Orient:		[-2.159269]
+Chunk:		"mp_kingpen"

$Navpoint:	"mp_kingpen_$respawn001"
$Type:		"ground"
$Pos:			<-893.6407 152.8755 -1248.754>
$Orient:		[-0.6034077]
+Chunk:		"mp_kingpen"

$Navpoint:	"mp_kingpen_$respawn002"
$Type:		"ground"
$Pos:			<-905.5772 152.8746 -1232.024>
$Orient:		[2.541381]
+Chunk:		"mp_kingpen"

$Navpoint:	"mp_kingpen_$respawn003"
$Type:		"ground"
$Pos:			<-895.614 152.8748 -1239.626>
$Orient:		[-2.212562]
+Chunk:		"mp_kingpen"

$Navpoint:	"mp_kingpen_$pimp enter000"
$Type:		"ground"
$Pos:			<-882.1066 152.8749 -1264.073>
$Orient:		[-0.5960028]
+Chunk:		"mp_kingpen"

$Navpoint:	"mp_kingpen_$respawn004"
$Type:		"ground"
$Pos:			<-901.0121 152.8748 -1245.005>
$Orient:		[-0.6735154]
+Chunk:		"mp_kingpen"

$Navpoint:	"mp_kingpen_$respawn005"
$Type:		"ground"
$Pos:			<-913.7332 152.8745 -1237.399>
$Orient:		[2.459511]
+Chunk:		"mp_kingpen"

$Navpoint:	"mp_kingpen_$respawn006"
$Type:		"ground"
$Pos:			<-885.7358 152.8748 -1268.598>
$Orient:		[2.524275]
+Chunk:		"mp_kingpen"

$Navpoint:	"mp_kingpen_$respawn007"
$Type:		"ground"
$Pos:			<-876.6139 152.8749 -1272.225>
$Orient:		[-2.075552]
+Chunk:		"mp_kingpen"

$Navpoint:	"mp_kingpen_$pimp enter001"
$Type:		"ground"
$Pos:			<32.892258 -4.339729 -17.291853>
$Orient:		[I]
+Chunk:		"mp_kingpen"

$Navpoint:	"mp_kingpen_$r000"
$Type:		"ground"
$Pos:			<-869.7738 152.8749 -1283.93>
$Orient:		[-2.201049]
+Chunk:		"mp_kingpen"

$Navpoint:	"mp_kingpen_$r001"
$Type:		"ground"
$Pos:			<-888.8949 152.8749 -1294.3>
$Orient:		[-0.5928159]
+Chunk:		"mp_kingpen"

$Navpoint:	"mp_kingpen_$r002"
$Type:		"ground"
$Pos:			<-893.321 152.8749 -1288.719>
$Orient:		[0.9777525]
+Chunk:		"mp_kingpen"

$Navpoint:	"mp_kingpen_$r003"
$Type:		"ground"
$Pos:			<-872.2724 152.8749 -1279.726>
$Orient:		[-2.156049]
+Chunk:		"mp_kingpen"

$Navpoint:	"amb_king_1"
$Type:		"ground"
$Pos:			<-874.4229 164.8449 -1278.082>
$Orient:		[-2.079519]
+Chunk:		"mp_kingpen"

$Navpoint:	"amb_king_2"
$Type:		"ground"
$Pos:			<-887.8692 161.6406 -1254.331>
$Orient:		[-2.079519]
+Chunk:		"mp_kingpen"

$Navpoint:	"amb_king_3"
$Type:		"ground"
$Pos:			<-903.7448 156.3624 -1271.079>
$Orient:		[-2.079519]
+Chunk:		"mp_kingpen"

$Navpoint:	"amb_king_4"
$Type:		"ground"
$Pos:			<-889.5181 161.6406 -1266.099>
$Orient:		[-2.079519]
+Chunk:		"mp_kingpen"

$Navpoint:	"amb_king_5"
$Type:		"ground"
$Pos:			<-901.8236 154.3622 -1242.391>
$Orient:		[-2.079519]
+Chunk:		"mp_kingpen"

$Navpoint:	"amb_king_6"
$Type:		"ground"
$Pos:			<-881.5665 150.1369 -1284.112>
$Orient:		[-2.079519]
+Chunk:		"mp_kingpen"

$Navpoint:	"amb_king_7"
$Type:		"ground"
$Pos:			<-872.3765 154.3622 -1279.798>
$Orient:		[-2.079519]
+Chunk:		"mp_kingpen"

$Navpoint:	"amb_king_8"
$Type:		"ground"
$Pos:			<-879.6042 150.3624 -1282.162>
$Orient:		[-2.079519]
+Chunk:		"mp_kingpen"

// -------
#Cameras
// -------

// -------
#Items
// -------

// -------
#Triggers
// -------

$Trigger:				"mp_kingpen_$pimp enter000"
$Trigger type:			"sphere"
$Trigger action:		"pimp enter"
$Trigger max fires:	0
$Trigger delay:		10000
$Start nav:				"mp_kingpen_$pimp enter000"
+Disabled
$Sphere radius:			.7

// -------
#Vehicles
// -------

// -------
#Respawns
// -------

$Respawn:		"mp_kingpen_respawn000"
$Start nav:		"mp_kingpen_$respawn000"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_kingpen_respawn001"
$Start nav:		"mp_kingpen_$respawn001"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_kingpen_respawn002"
$Start nav:		"mp_kingpen_$respawn002"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_kingpen_respawn003"
$Start nav:		"mp_kingpen_$respawn003"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_kingpen_respawn004"
$Start nav:		"mp_kingpen_$respawn004"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_kingpen_respawn005"
$Start nav:		"mp_kingpen_$respawn005"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_kingpen_respawn006"
$Start nav:		"mp_kingpen_$respawn006"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_kingpen_respawn007"
$Start nav:		"mp_kingpen_$respawn007"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_kingpen_$r000"
$Start nav:		"mp_kingpen_$r000"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_kingpen_$r001"
$Start nav:		"mp_kingpen_$r001"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_kingpen_$r002"
$Start nav:		"mp_kingpen_$r002"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_kingpen_$r003"
$Start nav:		"mp_kingpen_$r003"
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

$Ambient:	"amb_king_1"
	$Navpoint:	"amb_king_1"
	$Shape:	"Sphere"
		$Inner Radius:	0.63
		$Outer Radius:	12.50
	$Inner Offset:	<0 0 0>
	$Emitter:	"list_0"
		$Volume:	0.1575
		$Min Delay:	0
		$Max Delay:	0
		$Min ToD:	0
		$Max ToD:	0
		$Play Type:	"Random"
		+File:	"amb_strp_bouncelikemychecks.wav"
		+File:	"amb_strp_digi warfare.wav"
		+File:	"amb_strp_grindin.wav"
		+File:	"amb_strp_leavetheho.wav"
		+File:	"amb_strp_questo e sporco.wav"
		+File:	"amb_strp_seventeen.wav"
		+File:	"amb_strp_the flow.wav"
		+File:	"amb_strp_two shots of henny.wav"
		+File:	"amb_strp_uzi.wav"
		+File:	"amb_strp_waycooljr.wav"
	+Masked

$Ambient:	"amb_king_2"
	$Navpoint:	"amb_king_2"
	$Shape:	"Sphere"
		$Inner Radius:	0.63
		$Outer Radius:	55.50
	$Inner Offset:	<0 0 0>
	$Emitter:	"list_0"
		$Volume:	0.1575
		$Min Delay:	6000
		$Max Delay:	15000
		$Min ToD:	0
		$Max ToD:	0
		$Play Type:	"Random"
		+File:	"amb_ext_veh_flyby_plane_1.wav"
	+Masked

$Ambient:	"amb_king_3"
	$Navpoint:	"amb_king_3"
	$Shape:	"Sphere"
		$Inner Radius:	0.63
		$Outer Radius:	15.50
	$Inner Offset:	<0 0 0>
	$Emitter:	"list_0"
		$Volume:	0.2000
		$Min Delay:	1000
		$Max Delay:	2000
		$Min ToD:	0
		$Max ToD:	0
		$Play Type:	"Random"
		+File:	"amb_res_classical_1.wav"
 		+File:	"amb_res_classical_2.wav"
		+File:	"amb_res_classical_3.wav"
 		+File:	"amb_res_classical_4.wav"
 		+File:	"amb_res_classical_1.wav"
 		+File:	"amb_res_classical_2.wav"
 		+File:	"amb_res_classical_3.wav"
		+File:	"amb_res_classical_4.wav"
		+File:	"amb_mall_classical_1.wav"
 		+File:	"amb_mall_classical_2.wav"
 		+File:	"amb_mall_classical_3.wav"
 		+File:	"amb_mall_classical_4.wav"
	+Masked

$Ambient:	"amb_king_4"
	$Navpoint:	"amb_king_4"
	$Shape:	"Sphere"
		$Inner Radius:	0.63
		$Outer Radius:	10.50
	$Inner Offset:	<0 0 0>
	$Emitter:	"list_0"
		$Volume:	0.2000
		$Min Delay:	0
		$Max Delay:	0
		$Min ToD:	0
		$Max ToD:	0
		$Play Type:	"Random"
 		+File:	"amb_ext_neon_hum_1.wav"
	+Masked

$Ambient:	"amb_king_5"
	$Navpoint:	"amb_king_5"
	$Shape:	"Sphere"
		$Inner Radius:	0.63
		$Outer Radius:	25.50
	$Inner Offset:	<0 0 0>
	$Emitter:	"list_0"
		$Volume:	0.2000
		$Min Delay:	3000
		$Max Delay:	7000
		$Min ToD:	0
		$Max ToD:	0
		$Play Type:	"Random"
 		+File:	"amb_ext_guard_radio_4.wav"
 		+File:	"amb_ext_guard_radio_5.wav"
 		+File:	"amb_ext_guard_radio_6.wav"
 		+File:	"amb_ext_guard_radio_7.wav"
 		+File:	"amb_ext_guard_radio_8.wav"
 		+File:	"amb_ext_guard_radio_9.wav"
	+Masked

$Ambient:	"amb_king_6"
	$Navpoint:	"amb_king_6"
	$Shape:	"Sphere"
		$Inner Radius:	0.63
		$Outer Radius:	20.50
	$Inner Offset:	<0 0 0>
	$Emitter:	"list_0"
		$Volume:	0.2000
		$Min Delay:	3000
		$Max Delay:	7000
		$Min ToD:	0
		$Max ToD:	0
		$Play Type:	"In Order"
 		+File:	"amb_ext_phone_page_1.wav"
 		+File:	"amb_ext_phone_page_10.wav"
 		+File:	"amb_ext_phone_page_11.wav"
 		+File:	"amb_ext_phone_page_14.wav"
 		+File:	"amb_ext_phone_page_15.wav"
 		+File:	"amb_ext_phone_page_16.wav"
 		+File:	"amb_ext_phone_page_2.wav"
 		+File:	"amb_ext_phone_page_3.wav"
		+File:	"amb_ext_phone_page_4.wav"
 		+File:	"amb_ext_phone_page_5.wav"
 		+File:	"amb_ext_phone_page_8.wav"
 		+File:	"amb_ext_phone_page_9.wav"
	+Masked

$Ambient:	"amb_king_7"
	$Navpoint:	"amb_king_7"
	$Shape:	"Sphere"
		$Inner Radius:	0.63
		$Outer Radius:	5.50
	$Inner Offset:	<0 0 0>
	$Emitter:	"list_0"
		$Volume:	0.2000
		$Min Delay:	3000
		$Max Delay:	7000
		$Min ToD:	0
		$Max ToD:	0
		$Play Type:	"Random"
		+File:	"amb_ext_water_drips_1.wav"
 		+File:	"amb_ext_water_drips_2.wav"
 		+File:	"amb_ext_water_drips_3.wav"
 		+File:	"amb_ext_water_drips_4.wav"
	+Masked

$Ambient:	"amb_king_8"
	$Navpoint:	"amb_king_8"
	$Shape:	"Sphere"
		$Inner Radius:	0.63
		$Outer Radius:	20.50
	$Inner Offset:	<0 0 0>
	$Emitter:	"list_0"
		$Volume:	0.2000
		$Min Delay:	0
		$Max Delay:	0
		$Min ToD:	0
		$Max ToD:	0
		$Play Type:	"Random"
		+File:	"amb_int_coke_machine_1.wav"
	+Masked

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
