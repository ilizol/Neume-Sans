#!/usr/bin/python
import fontforge
font = fontforge.open("../fonts/otf/NeumeSans-Regular.otf")
font.generate("../fonts/woff/NeumeSans-Regular.woff") 
