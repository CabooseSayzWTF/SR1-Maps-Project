// -------
#Includes
// -------

// -------
#Groups
// -------


// -------
#Navpoints
// -------

$Navpoint:	"mp_steelml_$respawn000"
$Type:		"ground"
$Pos:			<-926.1882 9.597887 579.2778>
$Orient:		[-1.613961]
+Chunk:		"mp_steelml"

$Navpoint:	"mp_steelml_$respawn001"
$Type:		"ground"
$Pos:			<-938.7023 5.527822 568.3387>
$Orient:		[1.550895]
+Chunk:		"mp_steelml"

$Navpoint:	"mp_steelml_$respawn002"
$Type:		"ground"
$Pos:			<-915.0312 4.693826 555.6896>
$Orient:		[-1.615599]
+Chunk:		"mp_steelml"

$Navpoint:	"mp_steelml_$respawn003"
$Type:		"ground"
$Pos:			<-939.0833 5.521119 554.9042>
$Orient:		[1.577106]
+Chunk:		"mp_steelml"

$Navpoint:	"mp_steelml_$pimp enter000"
$Type:		"ground"
$Pos:			<-959.2272 13.69894 579.0008>
$Orient:		[-1.654011]
+Chunk:		"mp_steelml"

$Navpoint:	"mp_steelml_$respawn004"
$Type:		"ground"
$Pos:			<-926.6047 4.688813 546.899>
$Orient:		[-0.06676083]
+Chunk:		"mp_steelml"

$Navpoint:	"mp_steelml_$respawn005"
$Type:		"ground"
$Pos:			<-919.2784 4.68897 546.68>
$Orient:		[-0.1341782]
+Chunk:		"mp_steelml"

$Navpoint:	"mp_steelml_$respawn006"
$Type:		"ground"
$Pos:			<-956.0899 13.69895 579.1108>
$Orient:		[1.508072]
+Chunk:		"mp_steelml"

$Navpoint:	"mp_steelml_$respawn007"
$Type:		"ground"
$Pos:			<-955.6862 13.69893 578.8677>
$Orient:		[1.531271]
+Chunk:		"mp_steelml"

$Navpoint:	"mp_steelml_$pimp enter001"
$Type:		"ground"
$Pos:			<32.892258 -4.339729 -17.291853>
$Orient:		[I]
+Chunk:		"mp_steelml"

$Navpoint:	"mp_steelml_$r000"
$Type:		"ground"
$Pos:			<-947.2532 13.69391 561.7838>
$Orient:		[1.505746]
+Chunk:		"mp_steelml"

$Navpoint:	"mp_steelml_$r001"
$Type:		"ground"
$Pos:			<-947.6625 13.6914 556.002>
$Orient:		[1.511716]
+Chunk:		"mp_steelml"

$Navpoint:	"mp_steelml_$r002"
$Type:		"ground"
$Pos:			<-947.7537 13.69715 569.2457>
$Orient:		[1.532772]
+Chunk:		"mp_steelml"

$Navpoint:	"mp_steelml_$r003"
$Type:		"ground"
$Pos:			<-947.6872 13.6895 551.6146>
$Orient:		[1.534166]
+Chunk:		"mp_steelml"

$Navpoint:	"amb_factory_Mill_1"
$Type:		"floating"
$Pos:			<-930.530945 8.059212 567.378479>
$Orient:		[1.256637]
+Chunk:		"mp_steelml"

$Navpoint:	"amb_factory_Mill_vent_1"
$Type:		"floating"
$Pos:			<-926.004883 10.767167 560.491028>
$Orient:		[I]
+Chunk:		"mp_steelml"

$Navpoint:	"amb_factory_Mill_turbine_1"
$Type:		"floating"
$Pos:			<-925.931274 18.166489 552.729187>
$Orient:		[0.052360]
+Chunk:		"mp_steelml"

$Navpoint:	"amb_factory_Mill_random_1"
$Type:		"floating"
$Pos:			<-930.068604 17.469070 560.806824>
$Orient:		[I]
+Chunk:		"mp_steelml"

$Navpoint:	"amb_factory_mach_11"
$Type:		"floating"
$Pos:			<-926.973633 8.647497 553.695190>
$Orient:		[I]
+Chunk:		"mp_steelml"

$Navpoint:	"amb_factory_steam_2"
$Type:		"floating"
$Pos:			<-908.394714 12.442916 546.751892>
$Orient:		[I]
+Chunk:		"mp_steelml"

$Navpoint:	"amb_factory_engine_1"
$Type:		"floating"
$Pos:			<-939.168762 5.518978 560.899780>
$Orient:		[I]
+Chunk:		"mp_steelml"

$Navpoint:	"amb_factory_clud_copper"
$Type:		"floating"
$Pos:			<-962.225708 16.618315 578.956787>
$Orient:		[-1.570770]
+Chunk:		"mp_steelml"

// -------
#Cameras
// -------

// -------
#Items
// -------

// -------
#Triggers
// -------

$Trigger:				"mp_steelml_$pimp enter000"
$Trigger type:			"sphere"
$Trigger action:		"pimp enter"
$Trigger max fires:	0
$Trigger delay:		10000
$Start nav:				"mp_steelml_$pimp enter000"
+Disabled
$Sphere radius:			.7

// -------
#Vehicles
// -------

// -------
#Respawns
// -------

$Respawn:		"mp_steelml_respawn000"
$Start nav:		"mp_steelml_$respawn000"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_steelml_respawn001"
$Start nav:		"mp_steelml_$respawn001"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_steelml_respawn002"
$Start nav:		"mp_steelml_$respawn002"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_steelml_respawn003"
$Start nav:		"mp_steelml_$respawn003"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_steelml_respawn004"
$Start nav:		"mp_steelml_$respawn004"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_steelml_respawn005"
$Start nav:		"mp_steelml_$respawn005"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam1

$Respawn:		"mp_steelml_respawn006"
$Start nav:		"mp_steelml_$respawn006"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_steelml_respawn007"
$Start nav:		"mp_steelml_$respawn007"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_steelml_$r000"
$Start nav:		"mp_steelml_$r000"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_steelml_$r001"
$Start nav:		"mp_steelml_$r001"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_steelml_$r002"
$Start nav:		"mp_steelml_$r002"
$Box size:		-1.000000 0.000000 -1.000000 1.000000 2.000000 1.000000
+MPTeam2

$Respawn:		"mp_steelml_$r003"
$Start nav:		"mp_steelml_$r003"
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

$Ambient:	"amb_factory_Mill_1"
	$Navpoint:	"amb_factory_Mill_1"
	$Shape:	"Sphere"
		$Inner Radius:	34.75
		$Outer Radius:	81.75
	$Inner Offset:	<0 0 0>
	$Emitter:	"list_0"
		$Volume:	0.5375
		$Min Delay:	0
		$Max Delay:	0
		$Min ToD:	500
		$Max ToD:	2000
		$ToD Fade In:	20000
		$ToD Fade Out:	10000
		$Play Type:	"In Order"
		+File:	"amb_ext_walla_factory2_3.wav"
	+Masked

$Ambient:	"amb_factory_Mill_vent_1"
	$Navpoint:	"amb_factory_Mill_vent_1"
	$Shape:	"Sphere"
		$Inner Radius:	2.63
		$Outer Radius:	11.25
	$Inner Offset:	<0 0 0>
	$Emitter:	"list_0"
		$Volume:	0.6125
		$Min Delay:	0
		$Max Delay:	0
		$Min ToD:	501
		$Max ToD:	1955
		$ToD Fade In:	10000
		$ToD Fade Out:	10000
		$Play Type:	"In Order"
		+File:	"amb_int_engine_large_4.wav"
	+Masked

$Ambient:	"amb_factory_Mill_turbine_1"
	$Navpoint:	"amb_factory_Mill_turbine_1"
	$Shape:	"Sphere"
		$Inner Radius:	11.25
		$Outer Radius:	29.63
	$Inner Offset:	<0 0 0>
	$Emitter:	"list_0"
		$Volume:	0.6125
		$Min Delay:	0
		$Max Delay:	0
		$Min ToD:	0
		$Max ToD:	0
		$ToD Fade In:	20000
		$ToD Fade Out:	2000
		$Play Type:	"In Order"
		+File:	"amb_int_turbine_3.wav"
	+Masked

$Ambient:	"amb_factory_Mill_random_1"
	$Navpoint:	"amb_factory_Mill_random_1"
	$Shape:	"Sphere"
		$Inner Radius:	36.13
		$Outer Radius:	62.13
	$Inner Offset:	<0 0 0>
	$Emitter:	"list_0"
		$Volume:	0.4625
		$Min Delay:	10000
		$Max Delay:	20000
		$Min ToD:	0
		$Max ToD:	0
		$ToD Fade In:	500
		$ToD Fade Out:	1800
		$Play Type:	"Random"
		+File:	"amb_int_ind_hydro_1.wav"
		+File:	"amb_int_ind_hydro_2.wav"
		+File:	"amb_int_ind_hydro_3.wav"
		+File:	"amb_int_ind_hydro_4.wav"
		+File:	"amb_int_ind_steam_rls_1.wav"
		+File:	"amb_int_ind_steam_vent_1.wav"
		+File:	"amb_int_ind_steam_vent_2.wav"
		+File:	"amb_int_ind_forklift_3.wav"
		+File:	"amb_int_ind_forklift_2.wav"
	+Masked

$Ambient:	"amb_factory_mach_11"
	$Navpoint:	"amb_factory_mach_11"
	$Shape:	"Sphere"
		$Inner Radius:	4.00
		$Outer Radius:	23.75
	$Inner Offset:	<0 0 0>
	$Emitter:	"list_0"
		$Volume:	0.5250
		$Min Delay:	0
		$Max Delay:	0
		$Min ToD:	0
		$Max ToD:	0
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"In Order"
		+File:	"amb_ext_transformer_1.wav"
	+Masked

$Ambient:	"amb_factory_steam_2"
	$Navpoint:	"amb_factory_steam_2"
	$Shape:	"Sphere"
		$Inner Radius:	3.25
		$Outer Radius:	4.50
	$Inner Offset:	<0 0 0>
	$Emitter:	"list_0"
		$Volume:	0.5500
		$Min Delay:	0
		$Max Delay:	0
		$Min ToD:	0
		$Max ToD:	0
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"In Order"
		+File:	"amb_ext_stream_1.wav"
	+Masked

$Ambient:	"amb_factory_engine_1"
	$Navpoint:	"amb_factory_engine_1"
	$Shape:	"Sphere"
		$Inner Radius:	4.00
		$Outer Radius:	12.00
	$Inner Offset:	<0 0 0>
	$Emitter:	"list_0"
		$Volume:	0.5375
		$Min Delay:	0
		$Max Delay:	0
		$Min ToD:	0
		$Max ToD:	0
		$ToD Fade In:	0
		$ToD Fade Out:	0
		$Play Type:	"In Order"
		+File:	"amb_int_engine_large_2.wav"
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

$Cluder:	"amb_factory_clud_copper"
	$Navpoint:	"amb_factory_clud_copper"
	$Rotation:	<0 90 0>
	$Inner:	1.375000	2.375000
	$Outer:	4.625000	5.875000
	$Offset:	0.000000	-1.750000
	$Radius Inner:	15.500000
	$Radius Outer:	32.875000
	$Excluder:	0
	$Volume:	0.000000
	+Masked

// -------
#Nodes
// -------


#End
