# Minimal Example

###### Example for using `devjs-particles`

## Example

Using Particles Effect

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

or

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

The above example is an example of applying the `Particles` animation among various animations.
