for i in $(find -L . -name  "*.css"); do mv $i ${i::-3}scss; done


