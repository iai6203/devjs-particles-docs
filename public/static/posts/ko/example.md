# 기본 예제

###### `devjs-particles`를 사용하기 위한 기본 예제

## 예제

Particles 효과 사용해보기

~~~html
<div id="container"></div>
<script src="./particles.min.js"></script>
~~~

~~~javascript
const containerEl = document.querySelector('#container')

particles.initParticles({
  container: containerEl,
})
~~~

또는

~~~html
<div id="container"></div>
~~~

~~~javascript
import { initParticle } from 'devjs-particles'

const containerEl = document.querySelector('#container')

initParticle({
  container: containerEl,
})
~~~

위 예제는 다양한 애니메이션 중 `Particles` 애니메이션을 적용해본 예시입니다.