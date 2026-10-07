import test from 'node:test';import assert from 'node:assert/strict';import {defaults,normalize,readConfig,saveConfig,loadSpots} from '../dist/model.js';
test('invalid options cannot enter training configuration',()=>assert.deepEqual(normalize({players:'3',street:'impossible'}),defaults));
test('training settings persist',()=>{let value;const s={setItem:(k,v)=>value=v,getItem:()=>value};assert.equal(saveConfig(s,{...defaults,format:'cash',players:'10'}),true);assert.equal(readConfig(s).players,'10')});
test('corrupted storage recovers',()=>assert.deepEqual(readConfig({getItem:()=>'{'}),defaults));
test('no invented spots without engine',async()=>assert.deepEqual(await loadSpots(null,defaults),{status:'pending',spots:[]}));
test('engine receives normalized configuration',async()=>{let actual;const r=await loadSpots({loadSpots:async c=>{actual=c;return {spots:[{id:'real'}]}}},{players:'7'});assert.equal(actual.players,'6');assert.equal(r.spots[0].id,'real')});
test('engine failure remains recoverable',async()=>assert.equal((await loadSpots({loadSpots:async()=>{throw Error()}},defaults)).status,'error'));
