import express from "express";
import {addList, deleteList, getList, getListID, updateList} from '../Crud/crud.js';

const router = express.Router();

router.get('/novelist',getList);
router.get('/novelist/:id',getListID);
router.post('/novelist',addList);
router.put('/novelist:id',updateList);
router.delete('/novelist:id',deleteList);




export default router;