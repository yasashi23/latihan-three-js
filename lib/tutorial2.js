// MATERI TENTANG LIGHTING

var scene = new THREE.Scene()
var cam = new THREE.PerspectiveCamera(45,innerWidth/innerHeight,1,100)
var renderer = new THREE.WebGLRenderer({antialias:true})
scene.background = new THREE.Color('0x0a0a0a')
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.BasicShadowMap
cam.position.z += 5
document.body.appendChild(renderer.domElement)

// membuat geometrinya
var box = new THREE.BoxGeometry(1,1,1)
var boxMat2 = new THREE.MeshPhongMaterial({
    color:0xff0000
})
var cube = new THREE.Mesh(box,boxMat2)
cube.receiveShadow = true
cube.castShadow = true
scene.add(cube)

var plane = new THREE.PlaneGeometry(1000,1000,500,500)
var planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xaaffaa
})
var planeMesh = new THREE.Mesh(plane, planeMaterial)
planeMesh.receiveShadow = true
planeMesh.position.set(0,-1,0)
planeMesh.rotation.x = -Math.PI/2
scene.add(planeMesh)

var ambient = new THREE.AmbientLight(0x404040)
scene.add(ambient)

var PointLight = new THREE.PointLight(0xff0000,0.5,50)
PointLight.position.set(2,2,2)
scene.add(PointLight)
scene.add(new THREE.PointLightHelper(PointLight,0.2,0x00ff00))

// var hemi = new THREE.HemisphereLight(0x0000ff, 0x00000, 0.5)
// scene.add(hemi)

// var directionalLight = new THREE.DirectionalLight(0x00ff00, 0.5)
// directionalLight.position.set(2,2,0)
// directionalLight.target.position.set(3,2,0)
// directionalLight.target.updateMatrixWorld()
// scene.add(directionalLight)
// scene.add(new THREE.DirectionalLightHelper(directionalLight))

var spotlight = new THREE.SpotLight(0x0000ff,0.5,5,Math.PI/10,)
spotlight.position.set(2,2,2)
// spotlight.target.position.set(3,2,0)
// spotlight.updateMatrixWorld()
spotlight.castShadow = true
scene.add(spotlight)
scene.add(new THREE.SpotLightHelper(spotlight))



function draw (){
cube.rotation.x += 0.01
cube.rotation.z += 0.01
renderer.render(scene, cam)
requestAnimationFrame(draw)
}
draw()