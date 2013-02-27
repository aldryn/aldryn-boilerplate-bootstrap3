# COMPASS SETTINGS

http_path = "" # use if other than /
sass_dir = "sass"
css_dir = "static/css"
images_dir = "static/img"
javascripts_dir = "static/js"

# :production or :development
environment = :production

# output_style = :expanded or :nested or :compact or :compressed
output_style = (environment == :production) ? :compressed : :nested

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false
