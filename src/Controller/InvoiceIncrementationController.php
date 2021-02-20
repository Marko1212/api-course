<?php

namespace App\Controller;

use App\Entity\Invoice;
use Doctrine\ORM\EntityManagerInterface;
//use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

//use Symfony\Component\Routing\Annotation\Route;

class InvoiceIncrementationController

{
    
    public function __invoke(Invoice $data, EntityManagerInterface $manager)
    {
        $data->setChrono($data->getChrono() + 1);

        $manager->flush();

        return $data;
    }
}
