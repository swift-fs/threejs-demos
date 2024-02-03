import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
const scaleRotationInit = () => {
  // 三大件:场景、相机、渲染器
  // 1. 场景
  const scene = new THREE.Scene()
  // 场景中添加物体
  // 创建一个cube 几何体
  // 几何体形状
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  // 创建一个纹理(也叫材质)
  const material = new THREE.MeshBasicMaterial({ color: 0xa6ff00 })
  // 创建一个网格体
  const cube = new THREE.Mesh(geometry, material)
  console.log('%c [ cube ]: ', 'color: #bf2c9f; background: pink; font-size: 13px;', cube)

  // 设置物体位置
  // cube.position.set(5, 0, 0)
  // cube.position.x = 5

  // 物体缩放
  // cube.scale.set(2, 0.5, 0.5)

  // 物体旋转(欧拉函数旋转)
  // Math.PI 为 180°
  // cube.rotation.set(Math.PI / 4, 0, 0)

  // 将网格体添加到场景中
  scene.add(cube)

  // 2. 相机
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  // 相机放在场景中哪个位置
  camera.position.set(0, 0, 5)
  // 相机一般也添加到场景中
  scene.add(camera)

  // 3. 渲染器
  const renderer = new THREE.WebGLRenderer()
  // 设置渲染器输出的大小
  renderer.setSize(window.innerWidth, window.innerHeight)
  // 将webgl渲染的canvas内容添加到父容器上
  const renderContainer = document.getElementById('render-content')
  renderContainer?.appendChild(renderer.domElement)

  // 渲染
  // 使用渲染器，通过相机把场景内容渲染进来
  // renderer.render(scene, camera)

  // 创建轨道控制器
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.update()

  // 创建辅助坐标系
  // 红色代表 X 轴. 绿色代表 Y 轴. 蓝色代表 Z 轴.
  const axesHelper = new THREE.AxesHelper(5)
  scene.add(axesHelper)

  function animate() {
    requestAnimationFrame(animate)
    // 不停的变换位置
    if (cube.position.x <= 5) {
      cube.position.x += 0.01
    }
    if (cube.position.x > 5) {
      cube.position.x = 0
    }

    // 不停的旋转
    cube.rotation.x += Math.PI / 180
    controls.update()
    renderer.render(scene, camera)
  }
  animate()
}
export default scaleRotationInit
