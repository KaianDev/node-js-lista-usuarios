import { Request, Response } from "express";
import { Users } from "../models/users";
import { Op } from "sequelize";
import validator from "validator";
import { locales } from "validator/lib/isIBAN";

export const users = async (req: Request, res: Response) => {
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

export const editLink = async (req: Request, res: Response) => {
    let id = req.params.id;

    console.log("ID", id);

    let results = await Users.findAll({ where: { id } });

    let user = results.length > 0 ? results[0] : undefined;

    res.render("pages/edit", { user, id });
};

export const updateUser = async (req: Request, res: Response) => {
    let { id, name, email, age } = req.body;
    let results = await Users.findAll({ where: { id } });

    let checkName = validator.isAlpha(name, "pt-BR", { ignore: " -" });
    let checkEmail = validator.isEmail(email);

    if (results.length > 0) {
        let user = results[0];

        if (checkEmail && checkName) {
            user.name = name;
            user.email = email;
            if (age) {
                user.age = age;
            }
            await user.save();
        } else {
            res.redirect("/");
            return;
        }
    }

    res.redirect("/");
};

export const deleteUser = async (req: Request, res: Response) => {
    let id = req.params.id;

    let results = await Users.findAll({ where: { id } });
    if (results.length > 0) {
        let user = results[0];
        await user.destroy();
    }

    res.redirect("/");
};
