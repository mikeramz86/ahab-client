# March 2

1. create symple prop type

_Reasonable defaults: when you have a language that doesn't do strict types_

```javascript
LoginPage.propTypes = {
    error: PropTypes.object.isRequired
}
```

_next set up a default prop using the proptypes syntax which will put in a blank object_

_now see if you can s see an error_

```javascript
const flash = ( {message, type }) => 
<div className="flash">{message}</div>
```

_We now want to respond to something:_

```javascript
in render()

const {error }
cosnt {message } = error

console.log()
```


# Notes
1. make sure your files are named after the components
1. always push with padding and not margin PADDING ALL THE TIME!!!!
1. Duck typing

___
