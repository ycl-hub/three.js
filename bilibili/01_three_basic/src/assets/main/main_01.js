import * as THREE from 'three'
//0.0 了解three.js 最基本的内容
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
renderer.render(scene,camera)

