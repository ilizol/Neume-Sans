# python3 generate-font.py ../sources/NeumeSansRegular.sfd ../fonts/otf/NeumeSans-Regular.otf
python3 generate-font.py ../fonts/otf/NeumeSans-Regular.otf ../fonts/ttf/NeumeSans-Regular.ttf
python3 generate-font.py ../fonts/otf/NeumeSans-Regular.otf ../fonts/woff/NeumeSans-Regular.woff

# fontforge -script generate-font.py ../sources/NeumeSansRegular.sfd ../fonts/otf/NeumeSans-Regular.otf

# neumes
cp -f ../fonts/ttf/NeumeSans-Regular.ttf ../../neumes/docs/fonts/NeumeSans-Regular.ttf
