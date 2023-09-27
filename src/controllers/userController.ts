import { Request, Response } from "express";
import { Users } from "../models/users";
import { Op } from "sequelize";

export const user = async (req: Request, res: Response) => {
    let users = await Users.findAll();

    res.json(users);
};

export const userId = async (req: Request, res: Response) => {
    let id: string = req.params.id as string;
    let users = await Users.findAll({
        where: {
            id: id,
        },
    });
    res.json(users);
};

export const userName = async (req: Request, res: Response) => {
    let name: string = req.params.name;
    console.log(name);
    let users = await Users.findAll({
        where: {
            name: name,
        },
    });

    res.json(users);
};
