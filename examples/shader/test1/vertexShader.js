const vertexShader =/*glsl*/ `
    uniform vec3 bColor;
    uniform vec3 tColor;
    uniform vec3 tColor2;
    varying vec3 vColor;
    uniform vec3 forceColor;
    uniform float forceColorProgress;
    uniform float decay;
    uniform float uTime;
    uniform float uSpeed;
    uniform float uHeight;
    void main() {
    	vec3 disTColor = tColor2 - tColor;
    	vec3 realTColor = tColor + disTColor * abs(cos(uTime));
        
    	vec3 disColor = realTColor - bColor;
    	float percent = (position.y + uHeight / 2.0) / uHeight;
    	vColor = percent * disColor + bColor;

		if(forceColorProgress != -1.0) {
			vec3 disVColor = forceColor - vColor;
			float p = forceColorProgress > 0.8 ? (forceColorProgress-0.8)*5.0 : forceColorProgress * 1.25;
			vColor = vColor + disVColor * forceColorProgress * decay;
		}

    	vec3 transformed = position;
    	if (position.y > uHeight / -2.0) {
    		transformed.y += cos(uTime) * uSpeed / 5.0;
    	}
    	transformed.y = max(transformed.y, uHeight / -2.0);

    	gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
    }
`;
export default vertexShader;
