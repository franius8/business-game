echo Enter the name of your component:
read name

mkdir src/"$name"
touch src/"$name"/"$name".tsx
touch src/"$name"/"$name".scss

echo import React from \'react\' > src/"$name"/"$name".tsx
echo import \'./"$name".scss\' >> src/"$name"/"$name".tsx
echo >> src/"$name"/"$name".tsx
echo export default function "$name" \(\) \{ >> src/"$name"/"$name".tsx
echo return \( >> src/"$name"/"$name".tsx
echo \<div className=\""$name"\"\> >> src/"$name"/"$name".tsx
echo \<h1\>"$name"\</h1\> >> src/"$name"/"$name".tsx
echo \</div\> >> src/"$name"/"$name".tsx
echo \)\} >> src/"$name"/"$name".tsx
echo >> src/"$name"/"$name".tsx


