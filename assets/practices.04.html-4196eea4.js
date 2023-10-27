import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,c as d,b as e,d as a,e as t,f as i}from"./app-00432054.js";const o={},c=i(`<h2 id="week-11-geospatial-data-analysis" tabindex="-1"><a class="header-anchor" href="#week-11-geospatial-data-analysis" aria-hidden="true">#</a> Week 11: Geospatial data analysis</h2><p>Spatial objects are typically represented using vector data, which includes information about the <code>shape</code> or <code>geometry</code> of the objects, along with <code>additional variables</code>. For instance, a vector dataset may describe the boundaries of countries (geometry) and also store attributes like country names and population size. Similarly, it can include the geometry of roads in an area, along with attributes such as road type and names.</p><h3 id="i-vector-data" tabindex="-1"><a class="header-anchor" href="#i-vector-data" aria-hidden="true">#</a> I. Vector data</h3><p><strong>A simple representation of spatial data</strong><br> In the example below we make a very simple map using only R base (no geo‐spatial packages yet). Note that a map is special type of plot (like a scatter plot, barplot, etc.). A map is a plot of geospatial data that also has labels and other graphical objects such as a scale bar or legend. The spatial data itself should not be referred to as a map.</p><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>name &lt;- LETTERS[1:10]
longitude &lt;- c(-116.7, -120.4, -116.7, -113.5, -115.5, -120.8, -119.5, -113.7, -113.7, -110.7)
latitude &lt;- c(45.3, 42.6, 38.9, 42.1, 35.7, 38.9, 36.2, 39, 41.6, 36.9)
stations &lt;- cbind(longitude, latitude)
# Simulated rainfall data
set.seed(0)
precip &lt;- round((runif(length(latitude))*10)^3)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A map of point locations is not that different from a basic x‐y scatter plot. Below there is a plot (a map in this case) that shows the location of the weather stations, and the size of the dots is proportional to the amount of precipitation. The point size is set with argument <code>cex</code>.</p><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>psize &lt;- 1 + precip/500
plot(stations, cex=psize, pch=20, col=&#39;red&#39;, main=&#39;Precipitation&#39;)
# add names to plot
text(stations, name, pos=4)
# add a legend
breaks &lt;- c(100, 250, 500, 1000)
legend.psize &lt;- 1+breaks/500
legend(&quot;topright&quot;, legend=breaks, pch=20, pt.cex=legend.psize, col=&#39;red&#39;, bg=&#39;gray&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Numeric vectors representing locations can be used to draw simple maps. It also shows how points can (and typically are) represented by pairs of numbers. A line and a polygon can be represented by a number of these points. Polygons need to “closed”, that is, the first point must coincide with the last point, but the polygon function took care of that for us.</p><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>lon &lt;- c(-116.8, -114.2, -112.9, -111.9, -114.2, -115.4, -117.7)
lat &lt;- c(41.3, 42.9, 42.4, 39.8, 37.6, 38.3, 37.6)
x &lt;- cbind(lon, lat)
plot(stations, main=&#39;Precipitation&#39;)
polygon(x, col=&#39;blue&#39;, border=&#39;light blue&#39;)
lines(stations, lwd=3, col=&#39;red&#39;)
points(x, cex=2, pch=20)
points(stations, cex=psize, pch=20, col=&#39;red&#39;, main=&#39;Precipitation&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="spatvector-objects-from-scratch-terra-package" tabindex="-1"><a class="header-anchor" href="#spatvector-objects-from-scratch-terra-package" aria-hidden="true">#</a> SpatVector objects from scratch (Terra package):</h3><p>The main vector data types are points, lines and polygons. Geometry of these data structures<br> consists of sets of coordinate pairs (x, y). The simplest case are called points. Each point has one coordinate pair, and n associated variables (e.g. a point representing a coffee shop has its coordinates and it can also have the coffee shop name, number of stories, etc.).</p><p>The terra package defines a set of classes with names that start with Spat to represent spatial data.</p><p>For vector data, the relevant class is SpatVector. These classes represent geometries as well as attributes (variables) describing the geometries.</p><ul><li>Create the data</li></ul><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>longitude &lt;- c(-116.7, -120.4, -116.7, -113.5, -115.5, -120.8, -119.5, -113.7, -113.7, -110.7)
latitude &lt;- c(45.3, 42.6, 38.9, 42.1, 35.7, 38.9, 36.2, 39, 41.6, 36.9)
lonlat &lt;- cbind(longitude, latitude)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Load the <code>terra</code> package from the library. Use the <code>vect</code> function to create a <code>SpatVector</code> object (by promoting the <code>lonlat</code> matrix).</li></ul><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>library(terra)
pts &lt;- vect(lonlat)
class (pts)

geom(pts)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Recreate the object, and now provide a CRS.</li></ul><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>crdref &lt;- &quot;+proj=longlat +datum=WGS84&quot;
pts &lt;- vect(lonlat, crs=crdref)
pts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>You can use a data.frame with the same number of rows as there are geometries to define the attributes (variables) of a SpatVector object by using the atts parameter. The following example creates a simulated data for precipitation and add it to the SpatVector.</li></ul><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>precipvalue &lt;- runif(nrow(lonlat), min=0, max=100)
df &lt;- data.frame(ID=1:nrow(lonlat), precip=precipvalue)
ptv &lt;- vect(lonlat, atts=df, crs=crdref)
ptv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),u={href:"https://cran.xn--rproject-0m3d.org/web/packages/maps/maps.pdf",target:"_blank",rel:"noopener noreferrer"},v=i(`<div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>require(maps)
data(canada.cities)
head(canada.cities)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code># get just the cities for Ontario
library(dplyr)
citiesOnt &lt;- canada.cities%&gt;%
filter(country.etc ==&quot;ON&quot;)
#promote this dataframe to SpatVector
citiesOnt &lt;- vect(citiesOnt,geom=c(&quot;long&quot;,&quot;lat&quot;))
citiesOnt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>class(citiesOnt)

plot(citiesOnt)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Attributes in a <code>SpatVector</code> can be used for filtering. In the following example, the second plot keeps only cities in Ontario with a population larger than 10000.</li></ul><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>par(mar = c(4, 4, .1, .1))
plot(citiesOnt)
plot(citiesOnt[citiesOnt$pop&gt;10000])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lines-and-polygons" tabindex="-1"><a class="header-anchor" href="#lines-and-polygons" aria-hidden="true">#</a> Lines and polygons</h3><ul><li>Use type = &quot;lines&quot; for lines and type = &quot;polygons&quot; for polygons. Both are created<br> connecting the points in the provided order. If type = &quot;polygons&quot; the resulting geometry<br> is a closed figure</li></ul><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>lon &lt;- c(-116.8, -114.2, -112.9, -111.9, -114.2, -115.4, -117.7)
lat &lt;- c(41.3, 42.9, 42.4, 39.8, 37.6, 38.3, 37.6)
lonlat &lt;- cbind(lon, lat)
lonlat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>pols &lt;- vect(lonlat, type=&quot;polygons&quot;, crs=crdref)
pols
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>plot(pols, las=1)
plot(pols, border=&#39;blue&#39;, col=&#39;yellow&#39;, lwd=3, add=TRUE)
points(pts, col=&#39;red&#39;, pch=20, cex=3)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reading-and-writing-spatial-vector-files" tabindex="-1"><a class="header-anchor" href="#reading-and-writing-spatial-vector-files" aria-hidden="true">#</a> Reading and writing spatial vector files</h3><p>The <code>shapefile</code> is the most commonly used file format for vector data.</p><div class="hint-container info"><p class="hint-container-title">Note</p><p>A SHAPEFILE IS REALLY A SET OF AT LEAST THREE (IDEALLY FOUR) FILES, WITH ALL THE SAME NAME,BUT DIFFERENT EXTENSION. FOR SHAPEFILE x YOU MUST HAVE, IN THE SAME DIRECTORY, THESE THREE FILES: x.shp, x.shx, x.dbf, AND IDEALLY ALSO x.prj</p></div>`,13),p={href:"https://geohub.lio.gov.on.ca/maps/mnr%E2%80%90district",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,"Use the vect function to read the file. Following code assumes that the r script has been saved in the same location as MNR_District folder (i.e. both are in the same parent folder).",-1),h=i(`<div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>library(terra)
filename &lt;- paste0(getwd(),&quot;/MNR_District/MNR_District.shp&quot;)
basename(filename)

ontarioShape &lt;- vect(filename)
ontarioShape
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>plot(ontarioShape)
points(citiesOnt)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Use <code>writeVector()</code> to save a vector file. You need to add argument <code>overwrite=TRUE</code> if you want to overwrite an existing file. The following code saves a shapefile with the <code>SpatVector</code> citiesOnt inside a folder (named as “ct” in this example) in your current working directory.</li></ul><div class="hint-container info"><p class="hint-container-title">Note</p><p>The “ct” folder must exists in advance. You may need to create it, for example, using the file explorer of windows.</p></div><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code># get current working directory
currentDir &lt;- getwd()
# save the shapefile in a previosly created folder inside your working directory
outfile &lt;- paste0(currentDir,&quot;/ct/citiesOntario.shp&quot;)
writeVector(citiesOnt, outfile, overwrite=TRUE)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vector-data-manipulation" tabindex="-1"><a class="header-anchor" href="#vector-data-manipulation" aria-hidden="true">#</a> Vector data manipulation</h3><ul><li><code>terra::plot()</code> method let you add colors to your map by simply using a categorical variable as parameter. You can use a categorical attribute to assign colors to the corresponding areas in the map.</li></ul><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>library(terra)
plot(ontarioShape,&quot;REGION_NAM&quot;)
plot(ontarioShape,&quot;DISTRICT_N&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>To extract the attributes (data.frame) from a SpatVector, use:</li></ul><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>d &lt;- as.data.frame(ontarioShape)
head(d)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Use <code>geom()</code> to extract the geometry as a matrix (although this is rarely needed).</li></ul><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>g &lt;- geom(ontarioShape)
head(g)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>A “well‐known text” is a standard text representation of geometry objects. Set the parameter wkt to TRUE to extract the geometry as “well‐known text”.</li></ul><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>g &lt;- geom(ontarioShape, wkt=TRUE)
substr(g[1], 1, 50)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>SpatVector variables can be accessed as variables in data frames. You can use variables to retrieve a sub‐area.</li></ul><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>ontarioShape$REGION_NAM

ontarioNWShape &lt;- ontarioShape[ontarioShape$REGION_NAM==&quot;Northwest&quot;]
plot(ontarioNWShape)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Use the <code>aggregate()</code> function to aggregate (dissolve) polygons that have the same value for an attribute of interest. Let’s compare the map from ontarioShape before and after aggregate it by region.</li></ul><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>ontarioShapeAgg &lt;- aggregate(ontarioShape, by=&#39;REGION_NAM&#39;)
plot(ontarioShape,&quot;REGION_NAM&quot;)
plot(ontarioShapeAgg,&quot;REGION_NAM&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="simple-maps-with-rnaturalearth-package" tabindex="-1"><a class="header-anchor" href="#simple-maps-with-rnaturalearth-package" aria-hidden="true">#</a> Simple maps with <code>rnaturalearth</code> package</h3><p><code>rnaturalearth</code> is an R package to hold and facilitate interaction with Natural Earth map data. <code>Natural Earth</code> is a public domain map dataset including vector country and other administrative boundaries.</p><ul><li><code>rnaturalearthdata</code>, <code>rnaturalearthhires</code> packages need to be installed in order to use all <code>rnaturalearth</code> capabilities</li></ul><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>if(!require(rnaturalearthdata))
    install.packages(&quot;rnaturalearthdata&quot;)
if(!require(rnaturalearthhires))
    install.packages(&quot;rnaturalearthhires&quot;, repos = &quot;https://ropensci.r-universe.dev&quot;, type = &quot;source&quot;)

library(rnaturalearth)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Use <code>ne_countries()</code> for country (admin‐0) boundaries. You can control several parameters of the map such as scale, and type.</li></ul><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code># world at small scale (low resolution)
terra::plot(ne_countries(type = &quot;countries&quot;, scale = &quot;small&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code># countries, UK undivided
terra::plot(ne_countries(country = &quot;united kingdom&quot;, type = &quot;countries&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code># map_units, UK divided into England, Scotland, Wales and Northern Ireland
terra::plot(ne_countries(country = &quot;united kingdom&quot;, type = &quot;map_units&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code># countries, small scale
terra::plot(ne_countries(country = &quot;united kingdom&quot;, scale = &quot;small&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code># countries, medium scale
terra::plot(ne_countries(country = &quot;united kingdom&quot;, scale = &quot;medium&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code># countries, large scale
terra::plot(ne_countries(country = &quot;united kingdom&quot;, scale = &quot;large&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Use <code>ne_states()</code> for boundaries within countries (admin‐1). Use geounit or country parameter to define the territory.</li></ul><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code># states geounit=&#39;france&#39;
terra::plot(ne_states(geounit = &quot;france&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code># states country=&#39;france&#39;
terra::plot(ne_states(country = &quot;france&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>rnaturalearth</code> has the <code>ne_download()</code> function to facilitate download of other vector and raster maps. Each Natural Earth dataset is characterised on the website according to scale, type and category. <code>rnaturalearth</code> allows you to specify scale, type and category and will construct the url and download the corresponding file.</li></ul><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code># lakes
lakes110 &lt;- ne_download(scale = 110, type = &quot;lakes&quot;, category = &quot;physical&quot;)
terra::plot(lakes110, col = &quot;blue&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code># rivers
rivers110 &lt;- ne_download(scale = 110, type = &quot;rivers_lake_centerlines&quot;, category = &quot;physical&quot;)
terra::plot(rivers110, col = &quot;blue&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),b={class:"hint-container info"},g=e("p",{class:"hint-container-title"},"Note",-1),f=e("br",null,null,-1),R=e("a",{href:"HTTPS://CRAN.R"},"HTTPS://CRAN.R",-1),y={href:"http://PROJECT.ORG/WEB/PACKAGES/RNATURALEARTH/VIGNETTES/RNATURALEARTH.HTML",target:"_blank",rel:"noopener noreferrer"},q=i(`<ul><li>Spatial vectors returned by rnaturalearth are objects from <code>sp</code> (outdated ‐ default) or <code>sf</code> packages. Use the vect function from the terra package to convert them to <code>SpatVector</code> objects. This let you use <code>terra</code> capabilities in vectors from <code>rnaturalearth</code> (e.g. color the map by using a categorical variable)</li></ul><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>colombiaShape &lt;- vect(ne_states(country = &quot;colombia&quot;))
colombiaShape
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code>d &lt;- as.data.frame(colombiaShape)
# Using the &quot;name&quot; feature to colour Colombian departments
# (Colombian administrative areas)
terra::plot(colombiaShape, &quot;name&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function x(w,_){const n=l("ExternalLinkIcon");return r(),d("div",null,[c,e("ul",null,[e("li",null,[a("You can also create a SpatVector from a data frame. The following code creates a vector (geometry: points) with the coordinates of cities in Ontario ‐ Canada. We use the maps package that has useful information about cities and maps of the world (see "),e("a",u,[a("https://cran.r‐project.org/web/packages/maps/maps.pdf"),t(n)]),a(").")])]),v,e("ul",null,[e("li",null,[a("Let’s include the borders from a shape file to the cities for Ontario. We have downloaded the shape file used in this example from Ontario Ministry of Natural Resources and Forestry at "),e("a",p,[a("https://geohub.lio.gov.on.ca/maps/mnr‐district"),t(n)]),a(".")]),m]),h,e("div",b,[g,e("p",null,[a("A LIST OF VECTOR LAYERS AVAILABLE VIA ne_download(type=[layer_name], scale=)"),f,a(" CAN BE FOUND AT: "),R,a("‐"),e("a",y,[a("PROJECT.ORG/WEB/PACKAGES/RNATURALEARTH/VIGNETTES/RNATURALEARTH.HTML"),t(n)])])]),q])}const T=s(o,[["render",x],["__file","practices.04.html.vue"]]);export{T as default};
