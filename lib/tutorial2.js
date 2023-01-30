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

// var box =  new THREE.SphereGeometry( 1, 32, 32 ) // membuat sebuah box dengan ukuran 1,1,1
// var boxMat = new THREE.MeshBasicMaterial({color:0xff0000})// warnanya red
// var boxMesh = new THREE.Mesh(box, boxMat)
// scene.add(boxMesh)

// MEMBUAT GEOMETRI SENDIRI
// const geo_saya = new THREE.BufferGeometry()//setiap geometri 3 dimensi di bentuk dari titik titik
const geo_saya = new THREE.BoxGeometry(1,1,1)//setiap geometri 3 dimensi di bentuk dari titik titik
// texture
const grass_texture = new THREE.TextureLoader().load('../texture/grass.jpg')
const A_texture = new THREE.TextureLoader().load('../texture/A.png')
const B_texture = new THREE.TextureLoader().load('../texture/B.png')
const C_texture = new THREE.TextureLoader().load('../texture/C.png')

const mat_array = [
    new THREE.MeshBasicMaterial({map:A_texture}),
    new THREE.MeshBasicMaterial({map:B_texture}),
    new THREE.MeshBasicMaterial({map:C_texture}),
        new THREE.MeshBasicMaterial({map:A_texture}),
    new THREE.MeshBasicMaterial({map:B_texture}),
    new THREE.MeshBasicMaterial({map:C_texture}),
]

// UNTUK BUFFER
// let vertices = new Float32Array([
//     -1.0, -1.0, 1.0,//0
//     1.0, 1.0, 1.0,//1
//     -1.0, 1.0, 1.0,//2
//     1.0, -1.0, 1.0,//3

//     -1.0, -1.0, -1.0,//4
//     1.0, 1.0, -1.0,//5
//     -1.0, 1.0, -1.0,//6
//     1.0, -1.0, -1.0,//7
// ])
// let colors = new Float32Array([
//     1.0,0.0,0.0,//R,G,B vertex 0
//     1.0,0.0,0.0,//R,G,B
//     1.0,1.0,0.0,//R,G,B
//     1.0,1.0,0.0,//R,G,B
//     0.0,1.0,0.0,//R,G,B vertex 4
//     0.0,1.0,0.0,//R,G,B
//     0.0,0.0,1.0,//R,G,B
//     0.0,0.0,1.0//R,G,B
// ])

// geo_saya.setAttribute('position', new THREE.BufferAttribute(vertices, 3))//angka tiga untuk satu titik butuh 3 nilai
// geo_saya.setAttribute('color', new THREE.BufferAttribute(colors, 3))//angka tiga untuk satu titik butuh 3 nilai

// geo_saya.setIndex([
//     // sisi depan
//     0,3,1,
//     1,2,0,

//     //sisi belakang
//     4,6,5,
//     5,7,4,

//     // sisi kiri
//     4,0,2,
//     2,6,4,

//     // sisi kanan
//     5,1,3,
//     3,7,5,

//     // sisi atas
//     1,5,6,
//     6,2,1, 

//     // sisi bawahnya
//     0,4,7,
//     7,3,0
// ])

// box 1
const mat_saya = new THREE.MeshBasicMaterial({map:grass_texture})
let mesh_saya = new THREE.Mesh(geo_saya, mat_array)
scene.add(mesh_saya)

// persegi
const geo_2 = new THREE.BufferGeometry()
let vertices = new Float32Array([
    -1.0, -1.0, 0.0,
    1.0,-1.0, 0.0,
    1.0, 1.0, 0.0,

    1.0, 1.0, 0.0,
    -1.0,1.0, 0.0,
    -1.0, -1.0, 0.0,
])
let uvs = new Float32Array([
    0.0,0.0,
    1.0,0.0,
    1.0,1.0,

    1.0,1.0,
    0.0,1.0,
    0.0,0.0
])
geo_2.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
geo_2.setAttribute('uv', new THREE.BufferAttribute(uvs, 2))
let material2 = new THREE.MeshBasicMaterial({color: 0xff0000, map: A_texture})
let mesh2 = new THREE.Mesh(geo_2, material2)
mesh2.position.set(-2,0,0)
scene.add(mesh2)

// let light1 = new THREE.PointLight(0xffffff,1)
// light1.position.set(0,3,2)
// scene.add(light1)

// let light2 = new THREE.PointLight(0xffffff,1)
// light2.position.set(0,-3,2)
// scene.add(light2)

// // box 2
// const mat_saya2 = new THREE.MeshLambertMaterial({
//     map:batik_texture, 
//     // emissive: 0x00ff00,
//     // emissiveIntensity: 1,
//     // emmissiveMap: batik_texture
//     // alphaMap: batik_texture,
//     transparent: true,
//     side: THREE.DoubleSide
// })
// let mesh_saya2 = new THREE.Mesh(geo_saya, mat_saya2)
// mesh_saya2.position.set(-2,0,0)
// scene.add(mesh_saya2)


// // box 3
// const mat_saya3 = new THREE.MeshPhongMaterial({
//     map: batik_texture,
//     shininess : 100,
//     // bumpMap: batu_texture,
//     // bumpScale: 0.01,
//     displacementMap: batu_texture
// })
// let mesh_saya3 = new THREE.Mesh(geo_saya, mat_saya3)
// mesh_saya3.position.set(2,0,0)
// scene.add(mesh_saya3)

// bentuk di dalam three js di sebut mesh, sebuuah MESH terdiri dari 2 unsur pembentuk Geometri dan Material

renderer.setSize(innerWidth, innerHeight)
document.body.appendChild(renderer.domElement)
cam.position.z = 4


window.addEventListener('resize',function(){
    renderer.setSize(this.window.innerWidth, this.window.innerHeight)
    cam.aspect = this.window.innerWidth/this.window.innerHeight
    cam.updateProjectionMatrix()
})
function draw() {
    requestAnimationFrame(draw)
    mesh_saya.rotation.y += 0.01
    mesh_saya.rotation.x += 0.01

    // mesh_saya2.rotation.y += 0.01
    // mesh_saya2.rotation.x += 0.01

    // mesh_saya3.rotation.y += 0.01
    // mesh_saya3.rotation.x += 0.01
    renderer.render(scene, cam)
}
draw()
    // renderer.render(scene, cam)
