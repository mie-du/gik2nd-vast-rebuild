for i in $(find .  -name '*.css'); do 
  dirName=$(dirname $i);
  baseName=$(basename $i);
  echo ${dirName}/_${baseName::-3}scss
  mv ${i} ${dirName}/_${baseName::-3}scss;
done