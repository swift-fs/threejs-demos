import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
const axesHelpInit = () => {
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
    controls.update()
    renderer.render(scene, camera)
  }
  animate()
}
export default axesHelpInit
