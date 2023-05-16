import * as THREE from 'three'
// 导入轨道控制器
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

//目标  requestAnimationFrame  时间参数 控制物体动画  目标：Clock该对象用于跟踪时间
//1.初始化 构建一个场景
const scene = new THREE.Scene()
//2. 创建一个相机(有各种类型相机)  相当于人的眼睛 用于观察事物
//参数 视野角度 视锥体长宽比  视锥体近端面、远端面，这些参数共同定义了相机的视锥体。
//2.1 透视相机
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
//2.1.1 设置相机位置
camera.position.set(0,0,10)//xyz坐标
//将相机添加到场景中
scene.add(camera)
//添加物体
//创建几何体对象   
const cubeGeometry = new THREE.BoxGeometry();
//设置材质z
const cubeMaterial = new THREE.MeshBasicMaterial({color:0xfff00})
//根据几何体和材质 创建物体
const cube  = new THREE.Mesh(cubeGeometry,cubeMaterial)
// console.log(cube)
// cube.position.set(5,0,0)
cube.position.x=3

//设置物体缩放   x y z
// cube.scale.set(5,2,6)

//设置物体旋转
cube.rotation.set(Math.PI/4,0,0,'XYZ')

//将几何体添加到场景中
scene.add(cube)
//初始化渲染器
const renderer = new THREE.WebGL1Renderer()
//设置渲染的尺寸大小  宽高
renderer.setSize(window.innerWidth,window.innerHeight)
// console.log(renderer)
//将webgl 渲染的canvas内容添加到body
document.body.appendChild(renderer.domElement)

// 使用渲染器 通过相机将场景渲染进来
// renderer.render(scene,camera)

//创建轨道控制器
const controls = new OrbitControls(camera,renderer.domElement)

//添加坐标轴 辅助器
const axesHelper = new THREE.AxesHelper(5);
scene.add( axesHelper );
// 设置时钟
const clock = new THREE.Clock();

function render(time){
  //默认传入时间time  表示开始执行渲染函数的时刻 单位是毫秒
  // cube.position.x+=0.01
  // cube.rotation.x+=0.01
  // let t =time/1000%5
  let deltaTime = clock.getElapsedTime();
  console.log(deltaTime)
  cube.position.x=(deltaTime%5)*1// 在坐标轴上每秒一米的速度
  cube.rotation.set(Math.PI/4,deltaTime,deltaTime,'XYZ')//旋转
   if(cube.position.x>5){
    cube.position.x=0
  }
  renderer.render(scene,camera)
  requestAnimationFrame(render)//浏览器在下一帧会重新渲染   做到不断的渲染
}
render()
