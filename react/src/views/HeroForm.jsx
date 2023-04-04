import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import * as React from "react";
import { useState } from "react";

export default function HeroForm() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [hero, setHero] = useState({
        id: null,
        avatar: "",
        alias: "",
        realName: "",
        description: "",
    });

    if (id) {
        React.useEffect(() => {
            
        }, []);
    }

    const onSubmit = async (ev) => {
        ev.preventDefault();
        
    };

    return (
        <>
            <TextField
                autoFocus
                onChange={(e) => setHero({ ...hero, avatar: e.target.value })}
                margin="dense"
                label="Avatar"
                fullWidth
                variant="standard"
                value={hero.avatar}
            />
            <TextField
                autoFocus
                onChange={(e) => setHero({ ...hero, alias: e.target.value })}
                margin="dense"
                label="Bí danh"
                fullWidth
                variant="standard"
                value={hero.alias}
            />
            <TextField
                autoFocus
                onChange={(e) => setHero({ ...hero, realName: e.target.value })}
                margin="dense"
                label="Họ tên"
                fullWidth
                variant="standard"
                value={hero.realName}
            />
            <TextField
                autoFocus
                onChange={(e) =>
                    setHero({ ...hero, description: e.target.value })
                }
                margin="dense"
                label="Mô tả"
                fullWidth
                variant="standard"
                value={hero.description}
                multiline
                rows={10}
            />
            <div className="flex justify-end items-center p-4 gap-2">
                <Button
                    disableElevation
                    className="rounded-full normal-case"
                    variant="contained"
                    color="error"
                    onClick={() => navigate("/admin")}
                >
                    Hủy bỏ
                </Button>
                <Button
                    disableElevation
                    className="rounded-full normal-case"
                    variant="contained"
                    onClick={onSubmit}
                    color="success"
                >
                    Lưu
                </Button>
            </div>
        </>
    );
}
