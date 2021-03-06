package netgloo.controllers;

import netgloo.models.User;
import netgloo.models.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

/**
 * A class to test interactions with the MySQL database using the UserDao class.
 *
 * @author netgloo
 */
@Controller
@RequestMapping("/api")
public class UserController {

    // ------------------------
    // PUBLIC METHODS
    // ------------------------

    /**
     * /create  --> Create a new user and save it in the database.
     *
     * @param email User's email
     * @param name  User's name
     * @return A string describing if the user is succesfully created or not.
     */
    @RequestMapping("/create")
    @ResponseBody
    public String create(String email, String name) {
        User user = null;
        try {
            user = new User(email, name);
            userDao.save(user);
        } catch (Exception ex) {
            return "Error creating the user: " + ex.toString();
        }
        return "User succesfully created! (id = " + user.getId() + ")";
    }

    /**
     * /delete  --> Delete the user having the passed id.
     *
     * @param id The id of the user to delete
     * @return A string describing if the user is succesfully deleted or not.
     */
    @RequestMapping("/delete")
    @ResponseBody
    public String delete(long id) {
        try {
            User user = new User(id);
            userDao.delete(user);
        } catch (Exception ex) {
            return "Error deleting the user: " + ex.toString();
        }
        return "User succesfully deleted!";
    }

    /**
     * /get-by-email  --> Return the id for the user having the passed email.
     *
     * @param email The email to search in the database.
     * @return The user id or a message error if the user is not found.
     */
    @RequestMapping("/get-by-email")
    @ResponseBody
    public String getByEmail(String email) {
        String userId;
        try {
            User user = userDao.findByEmail(email);
            userId = String.valueOf(user.getId());
        } catch (Exception ex) {
            return "User not found";
        }
        return "The user id is: " + userId;
    }

    @RequestMapping("/search")
    @ResponseBody
    public List<User> searchByName(String name) {
        return userDao.findByNameContaining(name);
    }


    @RequestMapping("/get-all")
    @ResponseBody
    public List<User> getAll(String email) {
        String userId;
        Iterable<User> users = userDao.findAll();
        List<User> list = new ArrayList<>();
        for (User user : users) {
            list.add(user);
        }
        return list;
    }

    /**
     * /update  --> Update the email and the name for the user in the database
     * having the passed id.
     *
     * @param id    The id for the user to update.
     * @param email The new email.
     * @param name  The new name.
     * @return A string describing if the user is succesfully updated or not.
     */
    @RequestMapping("/update")
    @ResponseBody
    public String updateUser(long id, String email, String name) {
        try {
            User user = userDao.findOne(id);
            user.setEmail(email);
            user.setName(name);
            userDao.save(user);
        } catch (Exception ex) {
            return "Error updating the user: " + ex.toString();
        }
        return "User successfully updated!";
    }

    // ------------------------
    // PRIVATE FIELDS
    // ------------------------

    @Autowired
    private UserDao userDao;

} // class UserController
