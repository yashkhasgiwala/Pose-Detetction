let video;
let poseNet;
let pose;
let skeleton;
//var currentX, currentY, a;
let values=[];
function setup() {
  count=0;
  console.log("Heyy");
  createCanvas(1000, 720);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
  //console.log(poses);

  if (poses.length > 0) {
    pose = poses[0].pose;
  }
}


function modelLoaded() {
  console.log('poseNet ready');
}

function keyPressed() {
  keyCode=UP_ARROW;
}

function draw() {
  translate(video.width, 0);
  scale(-1, 1);
  image(video, 0, 0);

  if (pose) {
    if (count==20) {
      append(values, pose.nose.x);
      c=values.length;
      if (values[c-2]-values[c-1]>50)
      { 

        console.log('AAAA');
      }
      count=0;
    }
    fill(255, 0, 0);
    ellipse(pose.nose.x, pose.nose.y+150, 25);
    count++;
  }

  //if (pose) {
  //  let eyeR = pose.rightEye;
  //  let eyeL = pose.leftEye;
  //  let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);
  //  fill(255, 0, 0);
  //  ellipse(pose.nose.x, pose.nose.y, d);
  //  fill(0, 0, 255);
  //  ellipse(pose.rightWrist.x, pose.rightWrist.y, 32);
  //  ellipse(pose.leftWrist.x, pose.leftWrist.y, 32);

  //  for (let i = 0; i < pose.keypoints.length; i++) {
  //    let x = pose.keypoints[i].position.x;
  //    let y = pose.keypoints[i].position.y;
  //    fill(0, 255, 0);
  //    ellipse(x, y, 16, 16);
  //  }

  //  for (let i = 0; i < skeleton.length; i++) {
  //    let a = skeleton[i][0];
  //    let b = skeleton[i][1];
  //    strokeWeight(2);
  //    stroke(255);
  //    line(a.position.x, a.position.y, b.position.x, b.position.y);
  //  }
  //}
}
