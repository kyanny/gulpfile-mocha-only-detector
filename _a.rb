File.write('test.js', File.read('test.js').sub(/(#{%w[describe it].sample})/, '\1.only'))
