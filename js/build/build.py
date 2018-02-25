#!/usr/bin/python
src = '../'
include = []
include.append(src + 'classes/drawables/drawable.js')
include.append(src + 'classes/drawables/path.js')
include.append(src + 'classes/drawables/rectangle.js')
include.append(src + 'classes/utils/vector2.js')
include.append(src + 'classes/utils/types.js')
include.append(src + 'classes/utils/layer.js')
include.append(src + 'draw.js')
buildTarget = open('bin.js', 'w')
for source in include:
    with open(source) as sourceStream:
        buildTarget.write(sourceStream.read())
buildTarget.close()
