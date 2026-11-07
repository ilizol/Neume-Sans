python3 generate-font.py ../fonts/otf/NeumeSans-Regular.otf ../fonts/ttf/NeumeSans-Regular.ttf
python3 generate-font.py ../fonts/otf/NeumeSans-Regular.otf ../sources/NeumeSansRegular.sfdir
python3 generate-font.py ../fonts/otf/NeumeSans-Regular.otf ../sources/NeumeSansRegular.ufo

# SBMUFL
python3 generate-sbmufl-font.py ../fonts/otf/NeumeSans-Regular.otf ../fonts/ttf/NeumeSans-SBMUFL.ttf --sfdir ../sources/NeumeSansSBMUFL.sfdir
# python3 generate-font.py ../fonts/ttf/NeumeSans-SBMUFL.ttf ../sources/NeumeSansSBMUFL.sfdir
python3 generate-font.py ../fonts/ttf/NeumeSans-SBMUFL.ttf ../sources/NeumeSansSBMUFL.ufo

# neumes
cp -f ../fonts/ttf/NeumeSans-Regular.ttf ../../neumes/docs/fonts/NeumeSans-Regular.ttf
