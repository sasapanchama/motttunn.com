/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../node_modules/three/build/three.module.js":
/*!****************************************************************************!*\
  !*** /Users/motttunn/environment/node_modules/three/build/three.module.js ***!
  \****************************************************************************/
/*! exports provided: WebGLRenderTargetCube, WebGLRenderTarget, WebGLRenderer, ShaderLib, UniformsLib, UniformsUtils, ShaderChunk, FogExp2, Fog, Scene, Sprite, LOD, SkinnedMesh, Skeleton, Bone, Mesh, LineSegments, LineLoop, Line, Points, Group, VideoTexture, DataTexture, DataTexture3D, CompressedTexture, CubeTexture, CanvasTexture, DepthTexture, Texture, AnimationLoader, CompressedTextureLoader, DataTextureLoader, CubeTextureLoader, TextureLoader, ObjectLoader, MaterialLoader, BufferGeometryLoader, DefaultLoadingManager, LoadingManager, ImageLoader, ImageBitmapLoader, FontLoader, FileLoader, Loader, LoaderUtils, Cache, AudioLoader, SpotLightShadow, SpotLight, PointLight, RectAreaLight, HemisphereLight, DirectionalLightShadow, DirectionalLight, AmbientLight, LightShadow, Light, StereoCamera, PerspectiveCamera, OrthographicCamera, CubeCamera, ArrayCamera, Camera, AudioListener, PositionalAudio, AudioContext, AudioAnalyser, Audio, VectorKeyframeTrack, StringKeyframeTrack, QuaternionKeyframeTrack, NumberKeyframeTrack, ColorKeyframeTrack, BooleanKeyframeTrack, PropertyMixer, PropertyBinding, KeyframeTrack, AnimationUtils, AnimationObjectGroup, AnimationMixer, AnimationClip, Uniform, InstancedBufferGeometry, BufferGeometry, Geometry, InterleavedBufferAttribute, InstancedInterleavedBuffer, InterleavedBuffer, InstancedBufferAttribute, Face3, Object3D, Raycaster, Layers, EventDispatcher, Clock, QuaternionLinearInterpolant, LinearInterpolant, DiscreteInterpolant, CubicInterpolant, Interpolant, Triangle, Math, Spherical, Cylindrical, Plane, Frustum, Sphere, Ray, Matrix4, Matrix3, Box3, Box2, Line3, Euler, Vector4, Vector3, Vector2, Quaternion, Color, ImmediateRenderObject, VertexNormalsHelper, SpotLightHelper, SkeletonHelper, PointLightHelper, RectAreaLightHelper, HemisphereLightHelper, GridHelper, PolarGridHelper, FaceNormalsHelper, DirectionalLightHelper, CameraHelper, BoxHelper, Box3Helper, PlaneHelper, ArrowHelper, AxesHelper, Shape, Path, ShapePath, Font, CurvePath, Curve, ImageUtils, ShapeUtils, WebGLUtils, WireframeGeometry, ParametricGeometry, ParametricBufferGeometry, TetrahedronGeometry, TetrahedronBufferGeometry, OctahedronGeometry, OctahedronBufferGeometry, IcosahedronGeometry, IcosahedronBufferGeometry, DodecahedronGeometry, DodecahedronBufferGeometry, PolyhedronGeometry, PolyhedronBufferGeometry, TubeGeometry, TubeBufferGeometry, TorusKnotGeometry, TorusKnotBufferGeometry, TorusGeometry, TorusBufferGeometry, TextGeometry, TextBufferGeometry, SphereGeometry, SphereBufferGeometry, RingGeometry, RingBufferGeometry, PlaneGeometry, PlaneBufferGeometry, LatheGeometry, LatheBufferGeometry, ShapeGeometry, ShapeBufferGeometry, ExtrudeGeometry, ExtrudeBufferGeometry, EdgesGeometry, ConeGeometry, ConeBufferGeometry, CylinderGeometry, CylinderBufferGeometry, CircleGeometry, CircleBufferGeometry, BoxGeometry, BoxBufferGeometry, ShadowMaterial, SpriteMaterial, RawShaderMaterial, ShaderMaterial, PointsMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshPhongMaterial, MeshToonMaterial, MeshNormalMaterial, MeshLambertMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshBasicMaterial, MeshMatcapMaterial, LineDashedMaterial, LineBasicMaterial, Material, Float64BufferAttribute, Float32BufferAttribute, Uint32BufferAttribute, Int32BufferAttribute, Uint16BufferAttribute, Int16BufferAttribute, Uint8ClampedBufferAttribute, Uint8BufferAttribute, Int8BufferAttribute, BufferAttribute, ArcCurve, CatmullRomCurve3, CubicBezierCurve, CubicBezierCurve3, EllipseCurve, LineCurve, LineCurve3, QuadraticBezierCurve, QuadraticBezierCurve3, SplineCurve, REVISION, MOUSE, CullFaceNone, CullFaceBack, CullFaceFront, CullFaceFrontBack, FrontFaceDirectionCW, FrontFaceDirectionCCW, BasicShadowMap, PCFShadowMap, PCFSoftShadowMap, FrontSide, BackSide, DoubleSide, FlatShading, SmoothShading, NoColors, FaceColors, VertexColors, NoBlending, NormalBlending, AdditiveBlending, SubtractiveBlending, MultiplyBlending, CustomBlending, AddEquation, SubtractEquation, ReverseSubtractEquation, MinEquation, MaxEquation, ZeroFactor, OneFactor, SrcColorFactor, OneMinusSrcColorFactor, SrcAlphaFactor, OneMinusSrcAlphaFactor, DstAlphaFactor, OneMinusDstAlphaFactor, DstColorFactor, OneMinusDstColorFactor, SrcAlphaSaturateFactor, NeverDepth, AlwaysDepth, LessDepth, LessEqualDepth, EqualDepth, GreaterEqualDepth, GreaterDepth, NotEqualDepth, MultiplyOperation, MixOperation, AddOperation, NoToneMapping, LinearToneMapping, ReinhardToneMapping, Uncharted2ToneMapping, CineonToneMapping, ACESFilmicToneMapping, UVMapping, CubeReflectionMapping, CubeRefractionMapping, EquirectangularReflectionMapping, EquirectangularRefractionMapping, SphericalReflectionMapping, CubeUVReflectionMapping, CubeUVRefractionMapping, RepeatWrapping, ClampToEdgeWrapping, MirroredRepeatWrapping, NearestFilter, NearestMipMapNearestFilter, NearestMipMapLinearFilter, LinearFilter, LinearMipMapNearestFilter, LinearMipMapLinearFilter, UnsignedByteType, ByteType, ShortType, UnsignedShortType, IntType, UnsignedIntType, FloatType, HalfFloatType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedInt248Type, AlphaFormat, RGBFormat, RGBAFormat, LuminanceFormat, LuminanceAlphaFormat, RGBEFormat, DepthFormat, DepthStencilFormat, RedFormat, RGB_S3TC_DXT1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGB_PVRTC_4BPPV1_Format, RGB_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_PVRTC_2BPPV1_Format, RGB_ETC1_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_10x10_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, LoopOnce, LoopRepeat, LoopPingPong, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, ZeroCurvatureEnding, ZeroSlopeEnding, WrapAroundEnding, TrianglesDrawMode, TriangleStripDrawMode, TriangleFanDrawMode, LinearEncoding, sRGBEncoding, GammaEncoding, RGBEEncoding, LogLuvEncoding, RGBM7Encoding, RGBM16Encoding, RGBDEncoding, BasicDepthPacking, RGBADepthPacking, TangentSpaceNormalMap, ObjectSpaceNormalMap, CubeGeometry, Face4, LineStrip, LinePieces, MeshFaceMaterial, MultiMaterial, PointCloud, Particle, ParticleSystem, PointCloudMaterial, ParticleBasicMaterial, ParticleSystemMaterial, Vertex, DynamicBufferAttribute, Int8Attribute, Uint8Attribute, Uint8ClampedAttribute, Int16Attribute, Uint16Attribute, Int32Attribute, Uint32Attribute, Float32Attribute, Float64Attribute, ClosedSplineCurve3, SplineCurve3, Spline, AxisHelper, BoundingBoxHelper, EdgesHelper, WireframeHelper, XHRLoader, BinaryTextureLoader, GeometryUtils, Projector, CanvasRenderer, JSONLoader, SceneUtils, LensFlare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/assets/js/script.js":
/*!*********************************!*\
  !*** ./src/assets/js/script.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"../../../../node_modules/three/build/three.module.js\");\n\nvar threshold = 0.5;\nvar sliderRange;\nvar sliderValue;\nvar camera;\nvar scene;\nvar light;\nvar renderer;\nvar sphereF;\nvar sphereB;\nvar sphereGeometry;\nvar sphereMaterial;\nvar shaderMaterial;\nvar shaderMaterialF;\nvar shaderMaterialB;\nvar shaderVertex;\nvar shaderFragment;\nwindow.addEventListener('load', function () {\n  getShader();\n}, false);\n\nvar getShader = function getShader() {\n  var x = new XMLHttpRequest();\n\n  x.onreadystatechange = function () {\n    if (x.readyState == 4) {\n      if (x.status == 200) {\n        shaderVertex = x.responseText;\n      }\n    }\n  };\n\n  x.open('GET', './assets/shader/main.vert');\n  x.send();\n  var y = new XMLHttpRequest();\n\n  y.onreadystatechange = function () {\n    if (y.readyState == 4) {\n      if (y.status == 200) {\n        shaderFragment = y.responseText;\n\n        if (shaderVertex != '' && shaderFragment != '') {\n          init();\n        }\n      }\n    }\n  };\n\n  y.open('GET', './assets/shader/main.frag');\n  y.send();\n};\n\nvar init = function init() {\n  sliderRange = document.getElementById('idx-Slider_Range');\n  sliderValue = document.getElementById('idx-Slider_Text_Value');\n  camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](45, window.innerWidth / window.innerHeight, 0.1, 1000);\n  camera.position.set(0, 0, 16);\n  scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n  scene.background = new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0xeeeeee);\n  light = new three__WEBPACK_IMPORTED_MODULE_0__[\"DirectionalLight\"](0xeeeeee, 1);\n  light.position.set(1, 1, 1).normalize();\n  scene.add(light);\n  renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({\n    antialias: true,\n    alpha: true\n  });\n  renderer.setPixelRatio(window.devicePixelRatio);\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  renderer.setClearColor(0xffffff, 0);\n  document.body.appendChild(renderer.domElement);\n  var loader = new three__WEBPACK_IMPORTED_MODULE_0__[\"TextureLoader\"]();\n  loader.load('./assets/images/mask.jpg', function (texture) {\n    var uniforms = {\n      'uColor': {\n        type: 'c',\n        value: new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0x00bfa5)\n      },\n      'uTexture': {\n        type: 't',\n        value: texture\n      },\n      'uThreshold': {\n        type: 'f',\n        value: threshold\n      }\n    };\n    sphereGeometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"SphereBufferGeometry\"](2, 32, 32); // shaderMaterial = new THREE.ShaderMaterial({\n    //   uniforms: uniforms,\n    //   vertexShader: shaderVertex,\n    //   fragmentShader: shaderFragment,\n    //   transparent : true,\n    //   depthFunc: THREE.AlwaysDepth,\n    //   blending: THREE.NormalBlending\n    // });\n    // shaderMaterialB      = shaderMaterial.clone();\n    // shaderMaterialB.side = THREE.BackSide;\n    // shaderMaterialF      = shaderMaterial.clone();\n    // shaderMaterialF.side = THREE.FrontSide;\n\n    shaderMaterialB = new three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderMaterial\"]({\n      uniforms: uniforms,\n      vertexShader: shaderVertex,\n      fragmentShader: shaderFragment,\n      transparent: true,\n      side: three__WEBPACK_IMPORTED_MODULE_0__[\"BackSide\"],\n      depthFunc: three__WEBPACK_IMPORTED_MODULE_0__[\"AlwaysDepth\"],\n      blending: three__WEBPACK_IMPORTED_MODULE_0__[\"NormalBlending\"]\n    });\n    sphereB = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](sphereGeometry, shaderMaterialB);\n    sphereB.material.needsUpdate = true;\n    scene.add(sphereB);\n    sliderRange.addEventListener('input', updateSlider(sliderRange, sliderValue, shaderMaterialB));\n    shaderMaterialF = new three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderMaterial\"]({\n      uniforms: uniforms,\n      vertexShader: shaderVertex,\n      fragmentShader: shaderFragment,\n      transparent: true,\n      side: three__WEBPACK_IMPORTED_MODULE_0__[\"FrontSide\"],\n      depthFunc: three__WEBPACK_IMPORTED_MODULE_0__[\"AlwaysDepth\"],\n      blending: three__WEBPACK_IMPORTED_MODULE_0__[\"NormalBlending\"]\n    });\n    sphereF = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](sphereGeometry, shaderMaterialF);\n    sphereF.material.needsUpdate = true;\n    scene.add(sphereF);\n    sliderRange.addEventListener('input', updateSlider(sliderRange, sliderValue, shaderMaterialF));\n    render();\n  });\n  window.addEventListener('resize', onWindowResize, false);\n};\n\nvar updateSlider = function updateSlider(element, targetValue, targetMaterial) {\n  return function (event) {\n    targetValue.innerText = element.value;\n    targetMaterial.uniforms.uThreshold.value = element.value;\n  };\n};\n\nvar onWindowResize = function onWindowResize() {\n  camera.aspect = window.innerWidth / window.innerHeight;\n  camera.updateProjectionMatrix();\n  renderer.setSize(window.innerWidth, window.innerHeight);\n};\n\nvar render = function render() {\n  requestAnimationFrame(render);\n  sphereF.rotation.y += 0.01;\n  sphereB.rotation.y += 0.01;\n  renderer.render(scene, camera);\n};\n\n//# sourceURL=webpack:///./src/assets/js/script.js?");

/***/ })

/******/ });