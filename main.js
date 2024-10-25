const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded',() => {
	const start = async ()=> {
		const video = document.createElement("video");
		video.setAttribute("src", "./myVideo.mp4")
		video.setAttrribute("loop","");
		
		video.oncanplay = ()=> {
			video.play();
			resolve(video.caputreStream());
		}
    	const mindarThree = new window.MINDAR.IMAGE.MindARThree({
		container: document.body,
			imageTargetSrc: './Josephs.mind'
	});
	
	const {renderer, scene, camera} = mindarThree;
	
	const geometry = new THREE.PlaneGeometry(1, 1);
	const videoTexture = new THREE.VideoTexture(video);
	const material = new THREE.MeshBasicMaterial({map videoTexture, side: THREE.Frontside, toneMapped: false});
	const plane = new THREE.Mesh(geometry, material);
	
	const anchor = mindarThree.addAnchor(0);
	anchor.group.add(plane);
	
	await mindarThreee.start();
	
	renderer.setAnimationLoop( () => {
		renderer.render(scene, camera);
		
	});
	
    }
	start();
	
});