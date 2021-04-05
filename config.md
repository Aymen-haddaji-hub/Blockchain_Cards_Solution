# start network
```
cd chaincode-essentials/basic-network
./start.sh
```
# installing and invoking chaincode, use CLI container of Peer.
```
docker exec -it cli bash
```
# Installing and Instantiating Chaincode
```
peer chaincode install -n mycc -v 1.0 -p "/opt/gopath/src/github.com/newcc" -l "node"
```
```
peer chaincode instantiate -o orderer.example.com:7050 -C mychannel -n mycc -l "node" -v 1.0 -c '{"Args":[]}'
```
# Adding Marks Of Card
```
peer chaincode invoke -o orderer.example.com:7050 -C mychannel -n mycc -c '{"function":"addMarks","Args":["Alice","68","84","89"]}'
```
# Querying Marks of Card “Alice”
```
peer chaincode query -o orderer.example.com:7050 -C mychannel -n mycc -c '{"function":"queryMarks","Args":["Alice"]}'
```
# Deleting Marks of “Alice” from Ledger
```
peer chaincode invoke -o orderer.example.com:7050 -C mychannel -n mycc -c '{"function":"deleteMarks","Args":["Alice"]}'
```
above script will delete key “Alice” and associated data from the ledger. if you query marks of Alice again, you’ll get an error saying Card_id doesn’t exist.”