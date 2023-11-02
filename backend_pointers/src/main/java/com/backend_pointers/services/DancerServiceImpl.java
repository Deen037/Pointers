package com.backend_pointers.services;
import com.backend_pointers.models.Dancer;
import com.backend_pointers.repositories.DancerRepo;
import com.backend_pointers.services.interfaces.DancerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;


@Service
public class DancerServiceImpl implements DancerService{
    private final DancerRepo dancerRepo;
    private final PasswordEncoder encoder;

    @Autowired
    public DancerServiceImpl(DancerRepo dancerRepo, PasswordEncoder encoder) {
        this.dancerRepo = dancerRepo;
        this.encoder = encoder;
    }

    @Override
    public List<Dancer> getAll(){
        return dancerRepo.findAll();
    }

    @Override
    public void save(Dancer dancer) {
        dancer.setPassword(encoder.encode(dancer.getPassword()));
        dancerRepo.save(dancer);
    }

    @Override
    public Optional<Dancer> findByEmail(String email) {
        return dancerRepo.findByEmail(email);
    }

    @Override
    public Optional<Dancer> findByFirstName(String firstName) {
        return dancerRepo.findByFirstName(firstName);
    }

    @Override
    public Optional<Dancer> findByUsername(String username) {
        return dancerRepo.findByUsername(username);
    }

}
