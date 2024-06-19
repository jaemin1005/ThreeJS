import { PerspectiveCamera, WebGLRenderer, Scene } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
//장면(Scene) 설정
//이 장면은 모든 3D 객체와 조명 등을 포함
const scene = new Scene();

//카메라(Camera) 설정
//PerspectiveCamera 객체를 생성합니다. 이 카메라는 인간의 눈처럼 원근감을 줌

const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0,0,50);


//렌더러(Renderer) 설정
//WebGLRenderer 객체를 생성합니다. 이 렌더러는 WebGL을 사용하여 장면을 렌더링합니다.
const renderer = new WebGLRenderer();
//setSize 메서드는 렌더러의 크기를 윈도우의 너비와 높이로 설정합니다.
renderer.setSize( window.innerWidth, window.innerHeight );
//renderer.domElement는 렌더링된 출력이 표시될 <canvas> 요소입니다. 이 요소를 문서의 <body>에 추가하여 브라우저 창에 표시되게 합니다.
document.body.appendChild( renderer.domElement );

const loaders = new GLTFLoader();
loaders.load( 'resources/3d/House.glb', function ( gltf ) {

  console.log("success_load");
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.log( error );

});

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};
animate();