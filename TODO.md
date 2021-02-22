### SQL.JS ERROR
+ Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value 16777216, (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which adjusts the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 
- TO FIX THIS:  
  update TOTAL_MEMORY, change 16777216  value to 536870912 on ever ocorrency ;

