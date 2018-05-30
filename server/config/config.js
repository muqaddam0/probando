const config = {
  production:{
      SECRET: process.env.SECRET,
      DATABASE: process.env.MONGODB_URI
  },
  default:{
      SECRET: 'BLISSISNOTHERE',
      DATABASE: 'mongodb://localhost:27017/project'
  }
}

exports.get = function get(env){
  return config[env] || config.default
} 
