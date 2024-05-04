// -------
#Includes
// -------

// -------
#Groups
// -------


// -------
#Navpoints
// -------

$Navpoint:	"mp_tharow1_$respawn000"
$Type:		"ground"
$Pos:			<-845.4607 -3.845001 -99.09172>
$Orient:		[-2.253759]
+Chunk:		"mp_tharow1"

$Navpoint:	"mp_tharow1_$respawn001"
$Type:		"ground"
$Pos:			<-883.8817 -3.936862 -92.14299>
$Orient:		[2.813434]
+Chunk:		"mp_tharow1"

$Navpoint:	"mp_tharow1_$respawn002"
$Type:		"ground"
$Pos:			<-879.2195 -3.845 -69.31137>
$Orient:		[2.653645]
+Chunk:		"mp_tharow1"

$Navpoint:	"mp_tharow1_$respawn003"
$Type:		"ground"
$Pos:			<-845.9485 -3.995001 -205.3008>
$Orient:		[-0.1274392]
+Chunk:		"mp_tharow1"

$Navpoint:	"mp_tharow1_$pimp enter000"
$Type:		"ground"
$Pos:			<-1039.566 -3.691669 -154.8515>
$Orient:		[2.097822]
+Chunk:		"mp_tharow1"

$Navpoint:	"mp_tharow1_$respawn004"
$Type:		"ground"
$Pos:			<-853.4208 -1.724764 -252.2114>
$Orient:		[-0.242357]
+Chunk:		"mp_tharow1"

$Navpoint:	"mp_tharow1_$respawn005"
$Type:		"ground"
$Pos:			<-863.6976 -3.716425 -213.2104>
$Orient:		[-0.1083195]
+Chunk:		"mp_tharow1"

$Navpoint:	"mp_tharow1_$respawn006"
$Type:		"ground"
$Pos:			<-1019.292 -3.691668 -159.7485>
$Orient:		[2.173534]
+Chunk:		"mp_tharow1"

$Navpoint:	"mp_tharow1_$respawn007"
$Type:		"ground"
$Pos:			<-1033.265 -3.691668 -179.3002>
$Orient:		[2.155612]
+Chunk:		"mp_tharow1"

$Navpoint:	"mp_tharow1_$pimp enter001"
$Type:		"ground"
$Pos:			<32.892258 -4.339729 -17.291853>
$Orient:		[I]
+Chunk:		"mp_tharow1"

$Navpoint:	"mp_tharow1_$r000"
$Type:		"ground"
$Pos:			<-1005.824 -3.995003 -237.2113>
$Orient:		[1.335843]
+Chunk:		"mp_tharow1"

$Navpoint:	"mp_tharow1_$r001"
$Type:		"ground"
$Pos:			<-1013.856 -3.995004 -216.6153>
$Orient:		[0.8797273]
+Chunk:		"mp_tharow1"

$Navpoint:	"mp_tharow1_$r002"
$Type:		"ground"
$Pos:			<-1057.406 -3.994995 -148.9189>
$Orient:		[2.125226]
+Chunk:		"mp_tharow1"

$Navpoint:	"mp_tharow1_$r003"
$Type:		"ground"
$Pos:			<-948.928 -2.460904 -277.5078>
$Orient:		[-0.1695543]
+Chunk:		"mp_tharow1"

$Navpoint:	"amb_saintsrow_seagulls3"
$Type:		"floating"
$Pos:			<-1101.570068 15.205299 -163.284119>
$Orient:		[I]
+Chunk:		"mp_tharow1"

$Navpoint:	"amb_saintsrow_seagulls4"
$Type:		"floating"
$Pos:			<-1102.434937 20.947857 176.538849>
$Orient:		[I]
+Chunk:		"mp_tharow1"

$Navpoint:	"amb_saintsrow_crickets2"
$Type:		"floating"
$Pos:			<-1043.876953 2.255951 -95.148529>
$Orient:		[I]
+Chunk:		"mp_tharow1"

$Navpoint:	"amb_saintsrow_crickets3"
$Type:		"floating"
$Pos:			<-985.605469 1.716431 -268.915161>
$Orient:		[I]
+Chunk:		"mp_tharow1"

$Navpoint:	"amb_saintsrow_overhead1"
$Type:		"floating"
$Pos:			<-985.605469 1.716431 -268.915161>
$Orient:		[I]
+Chunk:		"mp_tharow1"

$Navpoint:	"amb_saintsrow_overhead2"
$Type:		"floating"
$Pos:			<-899.854 -2.507481 8.288543>
$Orient:		[I]
+Chunk:		"mp_tharow1"

$Navpoint:	"amb_saintsrow_overhead3"
$Type:		"floating"
$Pos:			<-889.5237 -2.362506 242.885>
$Orient:		[I]
+Chunk:		"mp_tharow1"

// -------
#Cameras
// -------

// -------
#Items
// -------

// -------
#Triggers
// -------

$Trigger:				"mp_tharow1_$pimp enter000"
$Trigger type:			"sphere"
$Trigger action:		"pimp enter"
$Trigger max fires:	0
$Trigger delay:		10000
$Start nav:				"mp_tharow1_$pimp enter000"
+Disabled
$Sphere radius:			.7

// -------
#Vehicles
// -------

// -------
#Respawns
// -------

$Respawn:		"mp_tharow1_respawn000"
$Start nav:		"mp_tharow1_$respawn000"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_tharow1_respawn001"
$Start nav:		"mp_tharow1_$respawn001"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_tharow1_respawn002"
$Start nav:		"mp_tharow1_$respawn002"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_tharow1_respawn003"
$Start nav:		"mp_tharow1_$respawn003"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_tharow1_respawn004"
$Start nav:		"mp_tharow1_$respawn004"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_tharow1_respawn005"
$Start nav:		"mp_tharow1_$respawn005"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_tharow1_respawn006"
$Start nav:		"mp_tharow1_$respawn006"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_tharow1_respawn007"
$Start nav:		"mp_tharow1_$respawn007"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_tharow1_$r000"
$Start nav:		"mp_tharow1_$r000"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_tharow1_$r001"
$Start nav:		"mp_tharow1_$r001"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_tharow1_$r002"
$Start nav:		"mp_tharow1_$r002"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_tharow1_$r003"
$Start nav:		"mp_tharow1_$r003"
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

$Ambient:	"amb_saintsrow_seagulls3"
	$Navpoint:	"amb_saintsrow_seagulls3"
	$Shape:	"Sphere"
		$Inner Radius:	12.63
		$Outer Radius:	86.38
	$Inner Offset:	<0 56.125000 0>
	$Emitter:	"day_gulls"
		$Volume:	0.2500
		$Min Delay:	5000
		$Max Delay:	15000
		$Min ToD:	1200
		$Max ToD:	1700
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+Silence on Weapon Fire
		+File:	"amb_ext_animal_gulls_a_1.wav"
		+File:	"amb_ext_animal_gulls_a_2.wav"
		+File:	"amb_ext_animal_gulls_a_3.wav"
		+File:	"amb_ext_animal_gulls_a_4.wav"
		+File:	"amb_ext_animal_gulls_b_1.wav"
		+File:	"amb_ext_animal_gulls_b_2.wav"
		+File:	"amb_ext_animal_gulls_b_3.wav"
		+File:	"amb_ext_animal_gulls_c_1.wav"
		+File:	"amb_ext_animal_gulls_c_2.wav"
	$Emitter:	"night_gulls"
		$Volume:	0.2500
		$Min Delay:	5000
		$Max Delay:	15000
		$Min ToD:	1700
		$Max ToD:	2400
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+File:	"amb_ext_animal_gulls_a_1.wav"
		+File:	"amb_ext_animal_gulls_a_2.wav"
		+File:	"amb_ext_animal_gulls_a_3.wav"
		+File:	"amb_ext_animal_gulls_a_4.wav"
		+File:	"amb_ext_animal_gulls_c_1.wav"
		+File:	"amb_ext_animal_gulls_c_3.wav"
	$Emitter:	"dusk_gulls"
		$Volume:	0.2500
		$Min Delay:	5000
		$Max Delay:	15000
		$Min ToD:	0
		$Max ToD:	1200
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"In Order"
		+File:	"amb_ext_animal_gulls_a_1.wav"
		+File:	"amb_ext_animal_gulls_a_2.wav"
		+File:	"amb_ext_animal_gulls_a_3.wav"
		+File:	"amb_ext_animal_gulls_a_4.wav"
		+File:	"amb_ext_animal_gulls_c_1.wav"
		+File:	"amb_ext_animal_gulls_c_2.wav"
	+Masked

$Ambient:	"amb_saintsrow_seagulls4"
	$Navpoint:	"amb_saintsrow_seagulls4"
	$Shape:	"Sphere"
		$Inner Radius:	10.38
		$Outer Radius:	75.75
	$Inner Offset:	<0 33.750000 0>
	$Emitter:	"day_gulls"
		$Volume:	0.2500
		$Min Delay:	5000
		$Max Delay:	15000
		$Min ToD:	1200
		$Max ToD:	1700
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+Silence on Weapon Fire
		+File:	"amb_ext_animal_gulls_a_1.wav"
		+File:	"amb_ext_animal_gulls_a_2.wav"
		+File:	"amb_ext_animal_gulls_a_3.wav"
		+File:	"amb_ext_animal_gulls_a_4.wav"
		+File:	"amb_ext_animal_gulls_b_1.wav"
		+File:	"amb_ext_animal_gulls_b_2.wav"
	$Emitter:	"night_gulls"
		$Volume:	0.2500
		$Min Delay:	5000
		$Max Delay:	15000
		$Min ToD:	1700
		$Max ToD:	2400
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+File:	"amb_ext_animal_gulls_a_1.wav"
		+File:	"amb_ext_animal_gulls_a_2.wav"
		+File:	"amb_ext_animal_gulls_a_3.wav"
		+File:	"amb_ext_animal_gulls_a_4.wav"
		+File:	"amb_ext_animal_gulls_c_1.wav"
		+File:	"amb_ext_animal_gulls_c_3.wav"
	$Emitter:	"dusk_gulls"
		$Volume:	0.2500
		$Min Delay:	5000
		$Max Delay:	15000
		$Min ToD:	0
		$Max ToD:	1200
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"In Order"
		+File:	"amb_ext_animal_gulls_a_1.wav"
		+File:	"amb_ext_animal_gulls_a_2.wav"
		+File:	"amb_ext_animal_gulls_a_3.wav"
		+File:	"amb_ext_animal_gulls_a_4.wav"
		+File:	"amb_ext_animal_gulls_c_1.wav"
		+File:	"amb_ext_animal_gulls_c_2.wav"
	+Masked

$Ambient:	"amb_saintsrow_crickets2"
	$Navpoint:	"amb_saintsrow_crickets2"
	$Shape:	"Cylinder"
		$Inner Radius:	29.63
		$Outer Radius:	56.75
		$Inner Height:	5.13
		$Outer Height:	13.00
	$Inner Offset:	<0 -3.250000 0>
	$Emitter:	"list_0"
		$Volume:	0.2000
		$Min Delay:	0
		$Max Delay:	0
		$Min ToD:	2000
		$Max ToD:	400
		$ToD Fade In:	10000
		$ToD Fade Out:	10000
		$Play Type:	"In Order"
		+Silence on Weapon Fire
		+File:	"amb_ext_crickets_2.wav"
	+Masked

$Ambient:	"amb_saintsrow_crickets3"
	$Navpoint:	"amb_saintsrow_crickets3"
	$Shape:	"Cylinder"
		$Inner Radius:	16.88
		$Outer Radius:	40.00
		$Inner Height:	7.00
		$Outer Height:	12.88
	$Inner Offset:	<0 -3.750000 0>
	$Emitter:	"list_0"
		$Volume:	0.2000
		$Min Delay:	0
		$Max Delay:	0
		$Min ToD:	2000
		$Max ToD:	400
		$ToD Fade In:	10000
		$ToD Fade Out:	10000
		$Play Type:	"In Order"
		+Silence on Weapon Fire
		+File:	"amb_ext_crickets_3.wav"
	+Masked

$Ambient:	"amb_saintsrow_overhead1"
	$Navpoint:	"amb_saintsrow_overhead1"
	$Shape:	"Sphere"
		$Inner Radius:	0.63
		$Outer Radius:	900.50
	$Inner Offset:	<0 0 0>
	$Emitter:	"horns_day"
		$Volume:	0.2250
		$Min Delay:	7000
		$Max Delay:	10000
		$Min ToD:	1000
		$Max ToD:	2000
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+File:	"amb_ext_car_horn_1.wav"
		+File:	"amb_ext_car_horn_2.wav"
		+File:	"amb_ext_car_horn_3.wav"
		+File:	"amb_ext_car_horn_4.wav"
		+File:	"amb_ext_car_horn_5.wav"
		+File:	"amb_ext_car_horn_6.wav"
	$Emitter:	"horns_night"
		$Volume:	0.2250
		$Min Delay:	40000
		$Max Delay:	60000
		$Min ToD:	2000
		$Max ToD:	200
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+File:	"amb_ext_car_horn_1.wav"
		+File:	"amb_ext_car_horn_2.wav"
		+File:	"amb_ext_car_horn_3.wav"
		+File:	"amb_ext_car_horn_4.wav"
		+File:	"amb_ext_car_horn_5.wav"
		+File:	"amb_ext_car_horn_6.wav"
	$Emitter:	"cars_day"
		$Volume:	0.3375
		$Min Delay:	5000
		$Max Delay:	20000
		$Min ToD:	900
		$Max ToD:	2100
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+File:	"amb_ext_veh_drvby_car_1.wav"
		+File:	"amb_ext_veh_drvby_car_2.wav"
		+File:	"amb_ext_veh_drvby_car_3.wav"
		+File:	"amb_ext_veh_drvby_car_4.wav"
	$Emitter:	"cars_night"
		$Volume:	0.3375
		$Min Delay:	13000
		$Max Delay:	50000
		$Min ToD:	2100
		$Max ToD:	400
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+File:	"amb_ext_veh_drvby_car_1.wav"
		+File:	"amb_ext_veh_drvby_car_2.wav"
		+File:	"amb_ext_veh_drvby_car_3.wav"
		+File:	"amb_ext_veh_drvby_car_4.wav"
	$Emitter:	"peds_day"
		$Volume:	0.2000
		$Min Delay:	6000
		$Max Delay:	10000
		$Min ToD:	1100
		$Max ToD:	2000
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+File:	"amb_ext_random_chatter_black_1.wav"
		+File:	"amb_ext_random_chatter_black_2.wav"
		+File:	"amb_ext_random_chatter_black_3.wav"
		+File:	"amb_ext_random_chatter_black_4.wav"
		+File:	"amb_ext_random_chatter_white_1.wav"
		+File:	"amb_ext_random_chatter_white_2.wav"
	$Emitter:	"peds_night"
		$Volume:	0.2000
		$Min Delay:	40000
		$Max Delay:	120000
		$Min ToD:	2000
		$Max ToD:	100
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+File:	"amb_ext_random_chatter_black_1.wav"
		+File:	"amb_ext_random_chatter_black_2.wav"
		+File:	"amb_ext_random_chatter_black_3.wav"
		+File:	"amb_ext_random_chatter_black_4.wav"
		+File:	"amb_ext_random_chatter_white_1.wav"
		+File:	"amb_ext_random_chatter_white_2.wav"
	$Emitter:	"randomrustle"
		$Volume:	0.0500
		$Min Delay:	3000
		$Max Delay:	10000
		$Min ToD:	0
		$Max ToD:	0
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+File:	"amb_ext_rustle_1.wav"
		+File:	"amb_ext_rustle_2.wav"
		+File:	"amb_ext_car_brakes_1.wav"
		+File:	"amb_ext_car_brakes_2.wav"
	$Emitter:	"trucks"
		$Volume:	0.0375
		$Min Delay:	10000
		$Max Delay:	30000
		$Min ToD:	800
		$Max ToD:	1700
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+File:	"amb_ext_veh_truck_brakes_1.wav"
		+File:	"amb_ext_veh_truck_brakes_2.wav"
		+File:	"amb_ext_veh_truck_brakes_3.wav"
		+File:	"amb_ext_veh_truck_drvby_4.wav"
	$Emitter:	"buses"
		$Volume:	0.1250
		$Min Delay:	30000
		$Max Delay:	40000
		$Min ToD:	630
		$Max ToD:	2300
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"In Order"
		+File:	"amb_ext_veh_drvby_bus_1.wav"
		+File:	"amb_ext_veh_drvby_bus_2.wav"
		+File:	"amb_ext_veh_drvby_bus_3.wav"
	$Emitter:	"sirens_day"
		$Volume:	0.0375
		$Min Delay:	180000
		$Max Delay:	240000
		$Min ToD:	1000
		$Max ToD:	1600
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+File:	"amb_ext_veh_siren_1.wav"
		+File:	"amb_ext_veh_siren_2.wav"
		+File:	"amb_ext_veh_siren_3.wav"
		+File:	"amb_ext_veh_siren_4.wav"
		+File:	"amb_ext_veh_siren_5.wav"
		+File:	"amb_ext_veh_siren_6.wav"
	$Emitter:	"sirens_night"
		$Volume:	0.0375
		$Min Delay:	60000
		$Max Delay:	120000
		$Min ToD:	1600
		$Max ToD:	500
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+File:	"amb_ext_veh_siren_1.wav"
		+File:	"amb_ext_veh_siren_2.wav"
		+File:	"amb_ext_veh_siren_3.wav"
		+File:	"amb_ext_veh_siren_4.wav"
		+File:	"amb_ext_veh_siren_5.wav"
		+File:	"amb_ext_veh_siren_6.wav"
	+Masked

$Ambient:	"amb_saintsrow_overhead2"
	$Navpoint:	"amb_saintsrow_overhead2"
	$Shape:	"Sphere"
		$Inner Radius:	0.63
		$Outer Radius:	900.50
	$Inner Offset:	<0 0 0>
	$Emitter:	"list_0"
		$Volume:	0.2250
		$Min Delay:	7000
		$Max Delay:	10000
		$Min ToD:	1000
		$Max ToD:	2000
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+File:	"amb_ext_random_chatter_black_1.wav"
		+File:	"amb_ext_random_chatter_black_2.wav"
		+File:	"amb_ext_random_chatter_black_3.wav"
		+File:	"amb_ext_random_chatter_black_4.wav"
		+File:	"amb_ext_random_chatter_white_1.wav"
		+File:	"amb_ext_random_chatter_white_2.wav"
	+Masked

$Ambient:	"amb_saintsrow_overhead3"
	$Navpoint:	"amb_saintsrow_overhead3"
	$Shape:	"Sphere"
		$Inner Radius:	0.63
		$Outer Radius:	900.50
	$Inner Offset:	<0 0 0>
	$Emitter:	"horns_day"
		$Volume:	0.2250
		$Min Delay:	7000
		$Max Delay:	10000
		$Min ToD:	1000
		$Max ToD:	2000
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+File:	"amb_ext_car_horn_1.wav"
		+File:	"amb_ext_car_horn_2.wav"
		+File:	"amb_ext_car_horn_3.wav"
		+File:	"amb_ext_car_horn_4.wav"
		+File:	"amb_ext_car_horn_5.wav"
		+File:	"amb_ext_car_horn_6.wav"
	$Emitter:	"horns_night"
		$Volume:	0.2250
		$Min Delay:	40000
		$Max Delay:	60000
		$Min ToD:	2000
		$Max ToD:	200
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+File:	"amb_ext_car_horn_1.wav"
		+File:	"amb_ext_car_horn_2.wav"
		+File:	"amb_ext_car_horn_3.wav"
		+File:	"amb_ext_car_horn_4.wav"
		+File:	"amb_ext_car_horn_5.wav"
		+File:	"amb_ext_car_horn_6.wav"
	$Emitter:	"cars_day"
		$Volume:	0.3375
		$Min Delay:	5000
		$Max Delay:	20000
		$Min ToD:	900
		$Max ToD:	2100
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+File:	"amb_ext_veh_drvby_car_1.wav"
		+File:	"amb_ext_veh_drvby_car_2.wav"
		+File:	"amb_ext_veh_drvby_car_3.wav"
		+File:	"amb_ext_veh_drvby_car_4.wav"
	$Emitter:	"cars_night"
		$Volume:	0.3375
		$Min Delay:	13000
		$Max Delay:	50000
		$Min ToD:	2100
		$Max ToD:	400
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+File:	"amb_ext_veh_drvby_car_1.wav"
		+File:	"amb_ext_veh_drvby_car_2.wav"
		+File:	"amb_ext_veh_drvby_car_3.wav"
		+File:	"amb_ext_veh_drvby_car_4.wav"
	$Emitter:	"peds_day"
		$Volume:	0.2000
		$Min Delay:	6000
		$Max Delay:	10000
		$Min ToD:	1100
		$Max ToD:	2000
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+File:	"amb_ext_random_chatter_black_1.wav"
		+File:	"amb_ext_random_chatter_black_2.wav"
		+File:	"amb_ext_random_chatter_black_3.wav"
		+File:	"amb_ext_random_chatter_black_4.wav"
		+File:	"amb_ext_random_chatter_white_1.wav"
		+File:	"amb_ext_random_chatter_white_2.wav"
	$Emitter:	"peds_night"
		$Volume:	0.2000
		$Min Delay:	40000
		$Max Delay:	120000
		$Min ToD:	2000
		$Max ToD:	100
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+File:	"amb_ext_random_chatter_black_1.wav"
		+File:	"amb_ext_random_chatter_black_2.wav"
		+File:	"amb_ext_random_chatter_black_3.wav"
		+File:	"amb_ext_random_chatter_black_4.wav"
		+File:	"amb_ext_random_chatter_white_1.wav"
		+File:	"amb_ext_random_chatter_white_2.wav"
	$Emitter:	"randomrustle"
		$Volume:	0.0500
		$Min Delay:	3000
		$Max Delay:	10000
		$Min ToD:	0
		$Max ToD:	0
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+File:	"amb_ext_rustle_1.wav"
		+File:	"amb_ext_rustle_2.wav"
		+File:	"amb_ext_car_brakes_1.wav"
		+File:	"amb_ext_car_brakes_2.wav"
	$Emitter:	"trucks"
		$Volume:	0.0375
		$Min Delay:	10000
		$Max Delay:	30000
		$Min ToD:	800
		$Max ToD:	1700
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+File:	"amb_ext_veh_truck_brakes_1.wav"
		+File:	"amb_ext_veh_truck_brakes_2.wav"
		+File:	"amb_ext_veh_truck_brakes_3.wav"
		+File:	"amb_ext_veh_truck_drvby_4.wav"
	$Emitter:	"buses"
		$Volume:	0.1250
		$Min Delay:	30000
		$Max Delay:	40000
		$Min ToD:	630
		$Max ToD:	2300
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"In Order"
		+File:	"amb_ext_veh_drvby_bus_1.wav"
		+File:	"amb_ext_veh_drvby_bus_2.wav"
		+File:	"amb_ext_veh_drvby_bus_3.wav"
	$Emitter:	"sirens_day"
		$Volume:	0.0375
		$Min Delay:	180000
		$Max Delay:	240000
		$Min ToD:	1000
		$Max ToD:	1600
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+File:	"amb_ext_veh_siren_1.wav"
		+File:	"amb_ext_veh_siren_2.wav"
		+File:	"amb_ext_veh_siren_3.wav"
		+File:	"amb_ext_veh_siren_4.wav"
		+File:	"amb_ext_veh_siren_5.wav"
		+File:	"amb_ext_veh_siren_6.wav"
	$Emitter:	"sirens_night"
		$Volume:	0.0375
		$Min Delay:	60000
		$Max Delay:	120000
		$Min ToD:	1600
		$Max ToD:	500
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"Random"
		+File:	"amb_ext_veh_siren_1.wav"
		+File:	"amb_ext_veh_siren_2.wav"
		+File:	"amb_ext_veh_siren_3.wav"
		+File:	"amb_ext_veh_siren_4.wav"
		+File:	"amb_ext_veh_siren_5.wav"
		+File:	"amb_ext_veh_siren_6.wav"
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
