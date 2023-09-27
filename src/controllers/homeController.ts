import e, { Request, Response } from "express";
import { Users } from "../models/users";
import { Op } from "sequelize";

export const home = async (req: Request, res: Response) => {
    let insert = true;
    let users = await Users.findAll({
        order: [["name", "ASC"]],
    });

    res.render("pages/home", {
        users,
        insert,
    });
};

export const newUser = async (req: Request, res: Response) => {
    let { name, age, email } = req.body;

    if (name && email) {
        let user = Users.build({
            name,
            email,
        });

        if (age) {
            user.age = parseInt(age);
        }
        await user.save();
    }

    res.redirect("/");
};

export const search = async (req: Request, res: Response) => {
    let find = req.query.find;
    let search = true;
    if (!find) {
        res.redirect("/");
        return;
    }

    let users = await Users.findAll({
        where: {
            name: {
                [Op.like]: `%${find}%`,
            },
        },
    });

    res.render("pages/home", {
        users,
        search,
        find,
    });
};
