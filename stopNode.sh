
#!/bin/bash
echo "The following node processes were found:"
ps aux | grep " node " | grep -v grep
nodepids=$(ps aux | grep " node " | grep -v grep | cut -c18-21)

echo "OK, so we will stop these process/es now..."

for nodepid in ${nodepids[@]}
do
echo "Stopping PID :"$nodepid
kill -2 $nodepid
done
echo "Done"