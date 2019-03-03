# March 2

1. create symple prop type

Reasonable defaults: when you have a language that doesn't do strict types

LoginPage.propTypes = {
    error: PropTypes.object.isRequired
}

next set up a default prop using the proptypes syntax which will put in a blank object

now see if you can s see an error
const flash = ( {message, type }) => 
<div className="flash">{message}</div>

We now want to respon to something: 

in render()

const {error }
cosnt {message } = error

console.log()


# Notes
1. make sure your files are named after the components
...1. 
1. always push with padding and not margin PADDING ALL THE TIME!!!!
1. Duck typing
1. If 
1.