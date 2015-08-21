File.write('test.js', File.read('test.js').sub(/(describe|it)\.only/, '\1'))
