
// Initialize Three.js scene
const scene = new THREE.Scene();

// Create camera and renderer
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Creating a pen object
const geometry = new THREE.CylinderGeometry(0.05, 0.05, 2, 32);
const material = new THREE.MeshStandardMaterial({ color: '#ffffff' });
const pen = new THREE.Mesh(geometry, material);
pen.position.y = -1;
scene.add(pen);

// Add lighting to the scene
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 0, 5);
scene.add(light);

// Rotating the pen object
function animate() {
  requestAnimationFrame(animate);
  pen.rotation.x += 0.01;
  pen.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// Adding color editing option
$('#color').on('change', function() {
  const color = $(this).val();
  pen.material.color.set(color);
});

// Now Adding text overlay feature
const overlay = document.getElementById('overlay');
const overlayCtx = overlay.getContext('2d');
overlay.width = window.innerWidth;
overlay.height = window.innerHeight;
overlay.style.width = window.innerWidth + 'px';
overlay.style.height = window.innerHeight + 'px';

$('#text').on('keyup', function() {
  const text = $(this).val();
  overlayCtx.clearRect(0, 0, overlay.width, overlay.height);
  overlayCtx.font = 'bold 48px Arial';
  overlayCtx.fillStyle = '#ffffff';
  overlayCtx.fillText(text, overlay.width / 2, overlay.height / 2);
});
