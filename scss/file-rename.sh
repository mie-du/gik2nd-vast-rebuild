for i in $(find -L . -name  "*.css"); do mv $i _${i::-3}scss; done


