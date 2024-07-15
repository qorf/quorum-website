echo 'Concatenating scripts'
cat plugins/WebEditor/WebEditor.js Run/Default.js moduleAddOn.js > blockEditor.js
echo 'Copying script'
cp blockEditor.js ../QuorumWebsite/html/script/blockEditor.js
echo 'Complete'