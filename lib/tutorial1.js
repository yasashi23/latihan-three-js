// three js terbagi menjadi 3 bagian
// 1. scene
//     -lingkungan 3d yang akan menjadi aplikasi kita
//     -3d world
// 2.Camera
//     -camera yang kita gunakan untuk melihat ke dalam 3d world tsb
// 3.renderer
//     -yang menampilkan hasil dari camera ke layar
 
var scene = new THREE.Scene()
var cam = new THREE.PerspectiveCamera(45,innerWidth/innerHeight,1,100)
// parameter camera
// 1.fOV. how wide is ur camera
// 2. Aspectration.
// 3. Near CLip = how close can the cam see
// 4. Far Clip = how far can the cam see

var renderer = new THREE.WebGLRenderer()

var box = new THREE.BoxGeometry(1,1,1) // membuat sebuah box dengan ukuran 1,1,1
var boxMat = new THREE.MeshBasicMaterial({color:0xff0000})// warnanya red
var boxMesh = new THREE.Mesh(box, boxMat)

scene.add(boxMesh)
cam.position.z = 5



renderer.setSize(innerWidth, innerHeight)
document.body.appendChild(renderer.domElement)


window.addEventListener('resize',function(){
    renderer.setSize(this.window.innerWidth, this.window.innerHeight)
    cam.aspect = this.window.innerWidth/this.window.innerHeight
})
function draw() {
    requestAnimationFrame(draw)
    boxMesh.rotation.y += 0.01
    renderer.render(scene, cam)
}
draw()
